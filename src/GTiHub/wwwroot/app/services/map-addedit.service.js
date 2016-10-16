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
var MapAddEditService = (function () {
    function MapAddEditService() {
        //Values for tracking state of a map
        this.mapSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.mapTransformsSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.mapAddingTransformSubj = new BehaviorSubject_1.BehaviorSubject(false);
        //Values for tracking state of a transformation 
        this.transformSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.ruleSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.ruleSourceFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.conditionsSubj = new BehaviorSubject_1.BehaviorSubject([]);
    }
    //Map methods
    MapAddEditService.prototype.setAddingTransform = function (addingTransform) {
        this.mapAddingTransformSubj.next(addingTransform);
    };
    MapAddEditService.prototype.getAddingTransform = function () {
        return this.mapAddingTransformSubj.asObservable();
    };
    //Transform methods
    MapAddEditService.prototype.setTransform = function (transform) {
        this.transformSubj.next(transform);
    };
    MapAddEditService.prototype.getTransform = function () {
        return this.transformSubj.asObservable();
    };
    //Rule methods
    MapAddEditService.prototype.setRule = function (rule) {
        this.ruleSubj.next(rule);
    };
    MapAddEditService.prototype.getRule = function () {
        return this.ruleSubj.asObservable();
    };
    //Rule Source Fields methods
    MapAddEditService.prototype.setRuleSourceFields = function (ruleSourceFields) {
        this.ruleSourceFieldsSubj.next(ruleSourceFields);
    };
    MapAddEditService.prototype.getRuleSourceFields = function () {
        return this.ruleSourceFieldsSubj.asObservable();
    };
    MapAddEditService.prototype.addRuleSourceField = function (ruleSourceField) {
        //Use concat here since push would return the length of the array post push
        this.ruleSourceFieldsSubj.next(this.ruleSourceFieldsSubj.getValue().concat(ruleSourceField));
    };
    MapAddEditService.prototype.removeRuleSourceField = function (ruleSourceField) {
        //Use filter in order to return list
        var filtered = this.ruleSourceFieldsSubj.getValue().filter(function (el) { return el != ruleSourceField; });
        this.ruleSourceFieldsSubj.next(filtered);
    };
    //Condition methods
    MapAddEditService.prototype.setConditions = function (conditions) {
        this.conditionsSubj.next(conditions);
    };
    MapAddEditService.prototype.getConditions = function () {
        return this.conditionsSubj.asObservable();
    };
    MapAddEditService.prototype.addCondition = function (condition) {
        //Use concat here since push would return the length of the array post push
        this.conditionsSubj.next(this.conditionsSubj.getValue().concat(condition));
    };
    MapAddEditService.prototype.removeCondition = function (condition, i) {
        //Use filter in order to return list
        var filtered = this.conditionsSubj.getValue().filter(function (el) { return el != condition; });
        this.conditionsSubj.next(filtered);
    };
    MapAddEditService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapAddEditService);
    return MapAddEditService;
}());
exports.MapAddEditService = MapAddEditService;
//# sourceMappingURL=map-addedit.service.js.map