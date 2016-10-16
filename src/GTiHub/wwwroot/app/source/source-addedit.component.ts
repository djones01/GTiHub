﻿import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Source, SourceField } from './source';
import { DataService } from '../services/data.service';
import { SourceAddEditService } from '../services/source-addedit.service';
import { SFieldSelectService } from '../services/source-select.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Response, Headers } from '@angular/http';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'source-addedit',
    templateUrl: 'app/source/source-addedit.component.html',
    providers: [DataService, SourceAddEditService, SFieldSelectService],
})
export class SourceAddEditComponent implements OnInit, OnDestroy {
    //Control the template / manual header boxes
    sopt: boolean = true;
    //Reset the form
    active = true;
    //Used for editing source
    editing = false;
    editId = -1;
    //Source which is being worked on
    source: Source;
    public uploader: FileUploader;
    sfieldCount = 0;
    hasSourceFields = false;
    hasSelectedSource = true;

    //Subscriptions for source adding / editing service
    sourceSubscription: Subscription;
    hasSourceFieldsSubscription: Subscription;
    hasSelectedSourceSubscription: Subscription;
    
    onFieldCountChange() {
        this.sourceAddEditService.modifySFields(this.sfieldCount);
    }

    onSubmit()
    {
        this.sourceAddEditService.createOrUpdateSource();
        //Refresh sources in modal
        this.selectService.initSources();
        this.newSource();
    }

    newSource() {
        this.sourceAddEditService.clear();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    //Modal Functions
    openSourceSelect(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            //User selected source field in modal
            if (result == 'Select Source') {
                this.selectService.getSelectedSource().subscribe(source => this.source = source);
                this._dataService.GetSingle('SourceSelect', this.source["sourceId"])
                    .subscribe(sourceFields => {
                        this.sourceAddEditService.setSourceFields(sourceFields);
                    });   
            }
        }, (reason) => { });
    }

    constructor(private _dataService: DataService, private modalService: NgbModal, private sourceAddEditService: SourceAddEditService, private selectService: SFieldSelectService ) {
        this.uploader = new FileUploader({ url: 'api/File/ExtractHeaders' });
        this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: any) => {
            var res = JSON.parse(response);
            this.sourceAddEditService.setSourceFields(res);
        };
    }

    ngOnInit(): void {
        this.sourceSubscription = this.sourceAddEditService.getSource().subscribe(source => this.source = source); 
        this.hasSourceFieldsSubscription = this.sourceAddEditService.hasSourceFields().subscribe(hasSourceFields => this.hasSourceFields = hasSourceFields);
        this.hasSelectedSourceSubscription = this.selectService.hasSelectedSource().subscribe(hasSelectedSource => this.hasSelectedSource = hasSelectedSource);
    }
    ngOnDestroy(): void {
        this.sourceSubscription.unsubscribe();
        this.hasSourceFieldsSubscription.unsubscribe();
        this.hasSelectedSourceSubscription.unsubscribe();
    }

}