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
var target_1 = require('../target/target');
var TargetAddEditService = (function () {
    function TargetAddEditService(_dataService) {
        this._dataService = _dataService;
        this.seqNumCount = 1;
        //Values for tracking state of Target
        this.targetSubj = new BehaviorSubject_1.BehaviorSubject(new target_1.Target('', '', '', true, null));
        //Values for tracking state of Target targetfields
        this.targetFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.hasTargetFieldsSubj = new BehaviorSubject_1.BehaviorSubject(false);
    }
    //Target's targetfield methods
    TargetAddEditService.prototype.createOrUpdateTarget = function () {
        var target = this.targetSubj.getValue();
        target.targetFields = this.targetFieldsSubj.getValue();
        this._dataService.Add('Targets', target).subscribe(function (target) { }, function (error) { return console.log(error); });
    };
    TargetAddEditService.prototype.setTarget = function (target) {
        this.targetSubj.next(target);
    };
    TargetAddEditService.prototype.getTarget = function () {
        return this.targetSubj.asObservable();
    };
    //Target's targetfield methods
    TargetAddEditService.prototype.modifyTFields = function (sFieldCount) {
        var targetFieldsCount = this.targetFieldsSubj.getValue().length;
        //Need to add target fields
        if (sFieldCount > targetFieldsCount) {
            for (var i = 0; i < (sFieldCount - targetFieldsCount); i++) {
                this.addNewTargetField();
            }
        }
        else {
            this.removeTargetFields(targetFieldsCount - sFieldCount);
        }
    };
    TargetAddEditService.prototype.setTargetFields = function (targetFields) {
        this.targetFieldsSubj.next([]);
        this.targetFieldsSubj.next(targetFields);
        this.setHasTargetFields();
    };
    TargetAddEditService.prototype.getTargetFields = function () {
        return this.targetFieldsSubj.asObservable();
    };
    TargetAddEditService.prototype.addNewTargetField = function () {
        //Use concat here since push would return the length of the array post push
        this.targetFieldsSubj.next(this.targetFieldsSubj.getValue().concat(new target_1.TargetField('N/A', 'text', true, this.seqNumCount++)));
        this.setHasTargetFields();
    };
    TargetAddEditService.prototype.removeTargetField = function (targetField, i) {
        var targetFields = this.targetFieldsSubj.getValue();
        //Update sequence numbers of all targetFields with seq num greater than the deleted one
        for (var j = i, len = targetFields.length; j < len; j++) {
            targetFields[j].seqNum--;
        }
        this.seqNumCount--;
        //Use filter in order to return list
        var filtered = targetFields.filter(function (el) { return el != targetField; });
        this.targetFieldsSubj.next(filtered);
        this.setHasTargetFields();
    };
    TargetAddEditService.prototype.removeTargetFields = function (removeCount) {
        var targetFields = this.targetFieldsSubj.getValue();
        targetFields = targetFields.splice(0, targetFields.length - removeCount);
        this.seqNumCount -= removeCount;
        this.targetFieldsSubj.next(targetFields);
        this.setHasTargetFields();
    };
    TargetAddEditService.prototype.setHasTargetFields = function () {
        if (this.targetFieldsSubj.getValue().length == 0) {
            this.hasTargetFieldsSubj.next(false);
        }
        else {
            this.hasTargetFieldsSubj.next(true);
        }
    };
    TargetAddEditService.prototype.hasTargetFields = function () {
        return this.hasTargetFieldsSubj.asObservable();
    };
    TargetAddEditService.prototype.clear = function () {
        this.targetSubj.next(new target_1.Target('', '', '', true, null));
        this.targetFieldsSubj.next([]);
        this.hasTargetFieldsSubj.next(false);
    };
    TargetAddEditService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], TargetAddEditService);
    return TargetAddEditService;
}());
exports.TargetAddEditService = TargetAddEditService;
//# sourceMappingURL=target-addedit.service.js.map