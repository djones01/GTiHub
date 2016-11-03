﻿import { Component, OnInit, OnDestroy } from '@angular/core';
import { RunMapService } from '../../services/map-runmap.service';
import { Subscription }   from 'rxjs/Subscription';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Map } from '../map';
import { FilePackage } from './filepackage';

@Component({
    moduleId: module.id,
    selector: 'map-fileselect',
    templateUrl: 'map-fileselect.component.html'
})
export class MapFileSelectComponent implements OnInit, OnDestroy {
    //Array for file packages
    filePackages: FilePackage[];
    public uploader: FileUploader;
    selectedMapId: number;
    processingMap: boolean = false;

    //Subscriptions
    filePackageSubscription: Subscription;
    selectedMapIdSubscription: Subscription;

    //Set all other filepackages to be non primary - WORKAROUND
    primaryChanged(filePackage: FilePackage) {
        filePackage.isPrimarySource = true;
        var others = this.filePackages.filter(function (el) {
            return el != filePackage;
        });
        others.forEach(function (fp) {
            fp.isPrimarySource = false;
        });
    }

    fileChangeEvent(sourceId: string) {
        this.uploader.onAfterAddingFile = (item) => {
            item.alias = sourceId;
        }
    }

    uploadAll() {
        var formData = new FormData();
        var fileList = this.uploader.queue;
        var filePackage;
        var i,j;
        for (i = 0; i < fileList.length; i++) {
            var fileItem = fileList[i];
            //Find the corresponding file package
            for (j = 0; j < this.filePackages.length; j++) {
                if (this.filePackages[j].sourceId.toString() == fileItem.alias) {
                    filePackage = this.filePackages[j];
                }
            }
            formData.append("primary-" + filePackage.sourceId, filePackage.isPrimarySource);
            formData.append("firstRowIsHeader-" + filePackage.sourceId, filePackage.firstRowHeader);
            formData.append("altHeadRow-" + filePackage.sourceId, filePackage.altHeadRow);
            formData.append("delimiter-" + filePackage.sourceId, filePackage.delimiter);
            formData.append(filePackage.sourceId, fileItem._file, fileItem.file.name);
        }
        formData.append("mapId", this.selectedMapId);
        var xhr = new XMLHttpRequest();

        //Need to use self in callback to have access to "this"
        var self = this;
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                self.setProcessing(false);
                // Create a new Blob object using the response data of the onload object
                var blob = new Blob([this.response], { type: 'text/csv' });
                let a = document.createElement("a");
                a.style.display = "none";
                document.body.appendChild(a);
                //Create a DOMString representing the blob and point the link element towards it
                let url = window.URL.createObjectURL(blob);
                a.href = url;
                a.setAttribute("download", "test.csv");
                //programatically click the link to trigger the download
                a.click();
                //release the reference to the file by revoking the Object URL
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                
            } else {
                //deal with your error state here
            }
        };

        xhr.open("POST", "api/File/RunMapping",true);
        xhr.send(formData);
        this.setProcessing(true);
    }

    setProcessing(processing: boolean) {
        this.processingMap = processing;
    }

    constructor(private runMapService: RunMapService) {
        this.uploader = new FileUploader({ url: 'api/File/RunMapping' });
        this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: any) => {
            var res = JSON.parse(response);
        };
    }
    ngOnInit() {
        this.filePackageSubscription = this.runMapService.getFilePackages().subscribe(filePackages => this.filePackages = filePackages);
        this.selectedMapIdSubscription = this.runMapService.getSelectedMapId().subscribe(selectedMapId => this.selectedMapId = selectedMapId);
    }
    ngOnDestroy() {
        this.filePackageSubscription.unsubscribe();
        this.selectedMapIdSubscription.unsubscribe();
    }
}