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
var TFieldSelectService = (function () {
    function TFieldSelectService(_dataService) {
        this._dataService = _dataService;
        this.targetsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.selectedTargetSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.hasSelectedTargetSubj = new BehaviorSubject_1.BehaviorSubject(false);
        this.selectedTargetFieldSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.filteredTargetFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.hasTargetFieldSubj = new BehaviorSubject_1.BehaviorSubject(false);
    }
    //Target methods
    TFieldSelectService.prototype.setSelectedTarget = function (target) {
        var _this = this;
        this.selectedTargetSubj.next(target);
        this.hasSelectedTargetSubj.next(true);
        //Set the available target fields
        this._dataService.GetSingle('TargetSelect', this.selectedTargetSubj.getValue()["targetId"])
            .subscribe(function (targetFields) {
            _this.filteredTargetFieldsSubj.next(targetFields);
        });
        this.hasTargetFieldSubj.next(false);
    };
    TFieldSelectService.prototype.getSelectedTarget = function () {
        return this.selectedTargetSubj.asObservable();
    };
    TFieldSelectService.prototype.hasSelectedTarget = function () {
        return this.hasSelectedTargetSubj.asObservable();
    };
    TFieldSelectService.prototype.getTargets = function () {
        return this.targetsSubj.asObservable();
    };
    TFieldSelectService.prototype.setTargets = function (targets) {
        this.targetsSubj.next(targets);
    };
    TFieldSelectService.prototype.addTarget = function (target) {
        //Use concat here since push would return the length of the array post push
        this.targetsSubj.next(this.targetsSubj.getValue().concat(target));
    };
    TFieldSelectService.prototype.initTargets = function () {
        var _this = this;
        this._dataService.GetAll('Targets').subscribe(function (targets) { return _this.targetsSubj.next(targets); }, function (error) { return console.log(error); });
    };
    //Targetfield methods
    TFieldSelectService.prototype.setSelectedTargetField = function (targetField) {
        this.selectedTargetFieldSubj.next(targetField);
        this.hasTargetFieldSubj.next(true);
    };
    TFieldSelectService.prototype.getSelectedTargetField = function () {
        return this.selectedTargetFieldSubj.asObservable();
    };
    //Filtered targetfields
    TFieldSelectService.prototype.getFilteredTargetFields = function () {
        return this.filteredTargetFieldsSubj.asObservable();
    };
    //Whether or not the modal has a selected targetfield
    TFieldSelectService.prototype.hasSelectedTargetField = function () {
        return this.hasTargetFieldSubj.asObservable();
    };
    TFieldSelectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], TFieldSelectService);
    return TFieldSelectService;
}());
exports.TFieldSelectService = TFieldSelectService;
//# sourceMappingURL=target-select.service.js.map