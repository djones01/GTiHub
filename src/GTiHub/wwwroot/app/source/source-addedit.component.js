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
var source_1 = require('./source');
var dataService_1 = require('../services/dataService');
var ng2_file_upload_1 = require('ng2-file-upload');
var SourceAddEditComponent = (function () {
    function SourceAddEditComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        //Control the template / manual header boxes
        this.sopt = true;
        //Reset the form
        this.active = true;
        //Used for editing source
        this.editing = false;
        this.editId = -1;
        //Store the actual number of source fields - comparison purposes
        this.sourceFieldsCount = 0;
        this.sources = [];
        this.addEditSource = new source_1.Source('', '', '', true, null);
        this.sourceFields = [];
        this.sFieldSeqNumCount = 1;
        this.options = [
            { value: 'url', display: 'URL' },
            { value: 'text', display: 'Text' },
            { value: 'bool', display: 'Boolean' },
            { value: 'decimal', display: 'Decimal' },
            { value: 'currency', display: 'Currency' },
            { value: 'email', display: 'Email' }
        ];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'api/File/ExtractHeaders' });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.setSourceFields(res);
        };
    }
    //------------------------------------------------------------------------------------------------------------------------  
    SourceAddEditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editing) {
            this._dataService.Update('Sources', this.editId, this.addEditSource).subscribe(function (client) { }, function (error) { return console.log(error); });
        }
        else {
            this.addEditSource.sourceFields = this.sourceFields;
            this._dataService.Add('Sources', this.addEditSource).subscribe(function (source) {
                _this.sources.push(source);
                _this.sourceFields = null;
            }, function (error) { return console.log(error); });
        }
        this.newSource();
        this.editing = false;
        return false;
    };
    SourceAddEditComponent.prototype.getSources = function () {
        var _this = this;
        this._dataService.GetAll('Sources').subscribe(function (sources) { return _this.sources = sources; });
    };
    SourceAddEditComponent.prototype.newSource = function () {
        var _this = this;
        this.addEditSource = new source_1.Source('', '', '', true, null);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    //---------------------------------------------------------------------------------------------------------------------------
    //Source Field functions
    SourceAddEditComponent.prototype.onFieldCountChange = function (newVal) {
        if (this.sfieldCount > this.sourceFieldsCount) {
            this.addSourceFields(this.sfieldCount - this.sourceFieldsCount);
        }
        else if (this.sfieldCount < this.sourceFieldsCount) {
            this.removeSourceFields(this.sourceFieldsCount - this.sfieldCount);
        }
        else {
        }
    };
    SourceAddEditComponent.prototype.addSourceFields = function (addCount) {
        var newSourceField;
        for (var i = 0; i < addCount; i++) {
            newSourceField = new source_1.SourceField('N/A', 'text', true, this.sFieldSeqNumCount++);
            this.sourceFields.push(newSourceField);
        }
        this.sourceFieldsCount = this.sourceFields.length;
    };
    //Mass removal for use with number picker
    SourceAddEditComponent.prototype.removeSourceFields = function (removeCount) {
        this.sourceFields = this.sourceFields.splice(0, this.sourceFields.length - removeCount);
        this.sFieldSeqNumCount -= removeCount;
    };
    //Targeted removal
    SourceAddEditComponent.prototype.removeSourceField = function (sourceField, i) {
        this.sourceFields = this.sourceFields.filter(function (el) {
            return el != sourceField;
        });
        //Update sequence numbers of all sourceFields with seq num greater than the deleted one
        for (var j = i, len = this.sourceFields.length; j < len; j++) {
            this.sourceFields[j].seqNum--;
        }
        this.sFieldSeqNumCount--;
    };
    SourceAddEditComponent.prototype.setSourceFields = function (sfields) {
        this.sourceFields = sfields;
    };
    //----------------------------------------------------------------------------------------------------------------------------
    SourceAddEditComponent.prototype.ngOnInit = function () {
        this.getSources();
    };
    SourceAddEditComponent = __decorate([
        core_1.Component({
            selector: 'source-addedit',
            templateUrl: 'app/source/source-addedit.component.html',
            providers: [dataService_1.DataService],
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], SourceAddEditComponent);
    return SourceAddEditComponent;
}());
exports.SourceAddEditComponent = SourceAddEditComponent;
//# sourceMappingURL=source-addedit.component.js.map