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
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var source_addedit_service_1 = require("../services/source-addedit.service");
var source_select_service_1 = require("../services/source-select.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_file_upload_1 = require("ng2-file-upload");
var SourceAddEditComponent = (function () {
    function SourceAddEditComponent(_dataService, modalService, sourceAddEditService, selectService) {
        var _this = this;
        this._dataService = _dataService;
        this.modalService = modalService;
        this.sourceAddEditService = sourceAddEditService;
        this.selectService = selectService;
        //Control the template / manual header boxes
        this.sopt = true;
        //Reset the form
        this.active = true;
        //Used for editing source
        this.editing = false;
        this.editId = -1;
        this.sfieldCount = 0;
        this.hasSourceFields = false;
        this.hasSelectedSource = true;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: "api/File/ExtractHeaders" });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.sourceAddEditService.setSourceFields(res);
        };
    }
    SourceAddEditComponent.prototype.onFieldCountChange = function () {
        this.sourceAddEditService.modifySFields(this.sfieldCount);
    };
    SourceAddEditComponent.prototype.onSubmit = function () {
        this.sourceAddEditService.createOrUpdateSource();
        //Refresh sources in modal
        this.selectService.initSources();
        this.newSource();
    };
    SourceAddEditComponent.prototype.extractFile = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append("delimiter", _this.delimiter);
        };
        this.uploader.uploadAll();
        this.delimiter = "";
    };
    SourceAddEditComponent.prototype.newSource = function () {
        var _this = this;
        this.sourceAddEditService.clear();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    //Modal Functions
    SourceAddEditComponent.prototype.openSourceSelect = function (content) {
        var _this = this;
        this.modalService.open(content, { size: "lg" })
            .result.then(function (result) {
            //User selected source field in modal
            if (result == "Select Source") {
                _this.selectService.getSelectedSource().subscribe(function (source) { return _this.source = source; });
                _this._dataService.GetAllWithId("Sources/GetSourceFieldsBySource", _this.source["sourceId"])
                    .subscribe(function (sourceFields) {
                    _this.sourceAddEditService.setSourceFields(sourceFields);
                });
            }
        }, function (reason) { });
    };
    SourceAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sourceSubscription = this.sourceAddEditService.getSource().subscribe(function (source) { return _this.source = source; });
        this.hasSourceFieldsSubscription = this.sourceAddEditService.hasSourceFields()
            .subscribe(function (hasSourceFields) { return _this.hasSourceFields = hasSourceFields; });
        this.hasSelectedSourceSubscription = this.selectService.hasSelectedSource()
            .subscribe(function (hasSelectedSource) { return _this.hasSelectedSource = hasSelectedSource; });
    };
    SourceAddEditComponent.prototype.ngOnDestroy = function () {
        this.sourceSubscription.unsubscribe();
        this.hasSourceFieldsSubscription.unsubscribe();
        this.hasSelectedSourceSubscription.unsubscribe();
    };
    SourceAddEditComponent = __decorate([
        core_1.Component({
            selector: "source-addedit",
            templateUrl: "app/source/source-addedit.component.html",
            providers: [data_service_1.DataService, source_addedit_service_1.SourceAddEditService, source_select_service_1.SFieldSelectService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, ng_bootstrap_1.NgbModal, source_addedit_service_1.SourceAddEditService, source_select_service_1.SFieldSelectService])
    ], SourceAddEditComponent);
    return SourceAddEditComponent;
}());
exports.SourceAddEditComponent = SourceAddEditComponent;
//# sourceMappingURL=source-addedit.component.js.map