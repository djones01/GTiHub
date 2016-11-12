"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var map_runmap_service_1 = require('../../services/map-runmap.service');
var ng2_file_upload_1 = require('ng2-file-upload');
var MapFileSelectComponent = (function () {
    function MapFileSelectComponent(runMapService) {
        this.runMapService = runMapService;
        this.processingMap = false;
        this.outputDelimiter = ',';
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'api/File/RunMapping' });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
        };
    }
    //Set all other filepackages to be non primary - WORKAROUND
    MapFileSelectComponent.prototype.primaryChanged = function (filePackage) {
        filePackage.isPrimarySource = true;
        var others = this.filePackages.filter(function (el) {
            return el != filePackage;
        });
        others.forEach(function (fp) {
            fp.isPrimarySource = false;
        });
    };
    MapFileSelectComponent.prototype.fileChangeEvent = function (sourceId) {
        this.uploader.onAfterAddingFile = function (item) {
            item.alias = sourceId;
        };
    };
    MapFileSelectComponent.prototype.uploadAll = function () {
        var formData = new FormData();
        var fileList = this.uploader.queue;
        var filePackage;
        var i, j;
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
        formData.append("evalConditions", this.evalConditions);
        formData.append("outputDelimiter", (this.outputDelimiter == '' ? ',' : this.outputDelimiter));
        var xhr = new XMLHttpRequest();
        //Need to use self in callback to have access to "this"
        var self = this;
        //MIME type of the returned file
        var mimetype = "";
        var fileName = "";
        xhr.onreadystatechange = function (e) {
            if (xhr.readyState == 4) {
                self.setProcessing(false);
                //Check the user set value of the file extension and set type 
                switch (self.fileExt) {
                    case "csv":
                        mimetype = "text/csv";
                        break;
                    case "txt":
                        mimetype = "text/plain";
                        break;
                    case "dat":
                        mimetype = "application/octet-stream";
                        break;
                    default:
                        mimetype = "text/plain";
                        break;
                }
                // Create a new Blob object using the response data of the onload object
                var blob = new Blob([this.response], { type: mimetype });
                var a = document.createElement("a");
                a.style.display = "none";
                document.body.appendChild(a);
                //Create a DOMString representing the blob and point the link element towards it
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                //Set the name of the returned file
                if (self.fileName != "") {
                    if (self.fileExt != "") {
                        this.fileName = self.fileName + "." + self.fileExt;
                    }
                    else {
                        this.fileName = self.fileName + ".txt";
                    }
                }
                else {
                    this.fileName = "output.txt";
                }
                a.setAttribute("download", this.fileName);
                //programatically click the link to trigger the download
                a.click();
                //release the reference to the file by revoking the Object URL
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            }
            else {
            }
        };
        xhr.open("POST", "api/File/RunMapping", true);
        xhr.send(formData);
        this.setProcessing(true);
    };
    MapFileSelectComponent.prototype.setProcessing = function (processing) {
        this.processingMap = processing;
    };
    MapFileSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filePackageSubscription = this.runMapService.getFilePackages().subscribe(function (filePackages) { return _this.filePackages = filePackages; });
        this.selectedMapIdSubscription = this.runMapService.getSelectedMapId().subscribe(function (selectedMapId) { return _this.selectedMapId = selectedMapId; });
    };
    MapFileSelectComponent.prototype.ngOnDestroy = function () {
        this.filePackageSubscription.unsubscribe();
        this.selectedMapIdSubscription.unsubscribe();
    };
    MapFileSelectComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'map-fileselect',
            templateUrl: 'map-fileselect.component.html'
        }), 
        __metadata('design:paramtypes', [map_runmap_service_1.RunMapService])
    ], MapFileSelectComponent);
    return MapFileSelectComponent;
}());
exports.MapFileSelectComponent = MapFileSelectComponent;
//# sourceMappingURL=map-fileselect.component.js.map