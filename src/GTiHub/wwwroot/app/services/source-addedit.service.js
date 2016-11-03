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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var data_service_1 = require('./data.service');
var source_1 = require('../source/source');
var SourceAddEditService = (function () {
    function SourceAddEditService(_dataService) {
        this._dataService = _dataService;
        this.seqNumCount = 1;
        //Values for tracking state of Source
        this.sourceSubj = new BehaviorSubject_1.BehaviorSubject(new source_1.Source('', '', '', true, null));
        //Values for tracking state of Source sourcefields
        this.sourceFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.hasSourceFieldsSubj = new BehaviorSubject_1.BehaviorSubject(false);
    }
    //Source's methods
    SourceAddEditService.prototype.createOrUpdateSource = function () {
        var source = this.sourceSubj.getValue();
        source.sourceFields = this.sourceFieldsSubj.getValue();
        this._dataService.Add('Sources', source).subscribe(function (source) { }, function (error) { return console.log(error); });
    };
    SourceAddEditService.prototype.setSource = function (source) {
        this.sourceSubj.next(source);
    };
    SourceAddEditService.prototype.getSource = function () {
        return this.sourceSubj.asObservable();
    };
    //Source's sourcefield methods
    SourceAddEditService.prototype.modifySFields = function (sFieldCount) {
        var sourceFieldsCount = this.sourceFieldsSubj.getValue().length;
        //Need to add source fields
        if (sFieldCount > sourceFieldsCount) {
            for (var i = 0; i < (sFieldCount - sourceFieldsCount); i++) {
                this.addNewSourceField();
            }
        }
        else {
            this.removeSourceFields(sourceFieldsCount - sFieldCount);
        }
    };
    SourceAddEditService.prototype.setSourceFields = function (sourceFields) {
        this.sourceFieldsSubj.next([]);
        this.sourceFieldsSubj.next(sourceFields);
        this.setHasSourceFields();
    };
    SourceAddEditService.prototype.getSourceFields = function () {
        return this.sourceFieldsSubj.asObservable();
    };
    SourceAddEditService.prototype.addNewSourceField = function () {
        //Use concat here since push would return the length of the array post push
        this.sourceFieldsSubj.next(this.sourceFieldsSubj.getValue().concat(new source_1.SourceField('N/A', 'text', true, this.seqNumCount++)));
        this.setHasSourceFields();
    };
    SourceAddEditService.prototype.removeSourceField = function (sourceField, i) {
        var sourceFields = this.sourceFieldsSubj.getValue();
        //Update sequence numbers of all sourceFields with seq num greater than the deleted one
        for (var j = i, len = sourceFields.length; j < len; j++) {
            sourceFields[j].seqNum--;
        }
        this.seqNumCount--;
        //Use filter in order to return list
        var filtered = sourceFields.filter(function (el) { return el != sourceField; });
        this.sourceFieldsSubj.next(filtered);
        this.setHasSourceFields();
    };
    SourceAddEditService.prototype.removeSourceFields = function (removeCount) {
        var sourceFields = this.sourceFieldsSubj.getValue();
        sourceFields = sourceFields.splice(0, sourceFields.length - removeCount);
        this.seqNumCount -= removeCount;
        this.sourceFieldsSubj.next(sourceFields);
        this.setHasSourceFields();
    };
    SourceAddEditService.prototype.setHasSourceFields = function () {
        if (this.sourceFieldsSubj.getValue().length == 0) {
            this.hasSourceFieldsSubj.next(false);
        }
        else {
            this.hasSourceFieldsSubj.next(true);
        }
    };
    SourceAddEditService.prototype.hasSourceFields = function () {
        return this.hasSourceFieldsSubj.asObservable();
    };
    SourceAddEditService.prototype.clear = function () {
        this.sourceSubj.next(new source_1.Source('', '', '', true, null));
        this.sourceFieldsSubj.next([]);
        this.hasSourceFieldsSubj.next(false);
    };
    SourceAddEditService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], SourceAddEditService);
    return SourceAddEditService;
}());
exports.SourceAddEditService = SourceAddEditService;
//# sourceMappingURL=source-addedit.service.js.map