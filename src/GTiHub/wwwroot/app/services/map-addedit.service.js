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
var transformation_1 = require('../transformation/transformation');
var map_1 = require('../map/map');
var data_service_1 = require('./data.service');
var MapAddEditService = (function () {
    function MapAddEditService(_dataService) {
        this._dataService = _dataService;
        //------------------------------Subjects-----------------------------------------//
        //Values for tracking state of a map
        this.mapSubj = new BehaviorSubject_1.BehaviorSubject(new map_1.Map('', '', true, []));
        this.mapTransformsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.mapAddingOrModifyingTransSubj = new BehaviorSubject_1.BehaviorSubject(false);
        //Values for tracking state of a transformation 
        this.transformSubj = new BehaviorSubject_1.BehaviorSubject(new transformation_1.Transformation('', null, []));
        //Rule / rule source fields
        this.rsfSeqNum = 1;
        this.ruleSubj = new BehaviorSubject_1.BehaviorSubject(new transformation_1.Rule('', '', '', null, []));
        this.ruleSourceFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        //Conditions
        this.condSeqNum = 1;
        this.conditionsSubj = new BehaviorSubject_1.BehaviorSubject([]);
    }
    //-------------------------------Methods-----------------------------------------//
    //Map methods
    MapAddEditService.prototype.getMap = function () {
        return this.mapSubj.asObservable();
    };
    MapAddEditService.prototype.addingOrModifyingTransform = function (addingTransform) {
        this.mapAddingOrModifyingTransSubj.next(addingTransform);
    };
    MapAddEditService.prototype.getAddingOrModifyingTransform = function () {
        return this.mapAddingOrModifyingTransSubj.asObservable();
    };
    MapAddEditService.prototype.getMapTransforms = function () {
        return this.mapTransformsSubj.asObservable();
    };
    MapAddEditService.prototype.removeMapTransform = function (transform) {
        var filtered = this.mapTransformsSubj.getValue().filter(function (el) { return el != transform; });
        this.mapTransformsSubj.next(filtered);
    };
    MapAddEditService.prototype.addOrUpdateMap = function () {
        var map = this.mapSubj.getValue();
        map.transformations = this.mapTransformsSubj.getValue();
        this._dataService.Add('Maps', map).subscribe(function () { }, function (error) { return console.log(error); }, function () { });
    };
    //Transform methods
    MapAddEditService.prototype.setTransform = function (transform) {
        this.transformSubj.next(transform);
    };
    MapAddEditService.prototype.getTransform = function () {
        return this.transformSubj.asObservable();
    };
    MapAddEditService.prototype.createOrUpdateTransform = function () {
        //Currently adding a transform
        if (this.mapAddingOrModifyingTransSubj.getValue()) {
            var transform = this.transformSubj.getValue();
            transform.conditions = this.conditionsSubj.getValue();
            var rule = this.ruleSubj.getValue();
            rule.ruleSourceFields = this.ruleSourceFieldsSubj.getValue();
            transform.rule = rule;
            this.mapTransformsSubj.next(this.mapTransformsSubj.getValue().concat(this.transformSubj.getValue()));
            this.resetTransformSubjects();
        }
        else {
        }
    };
    MapAddEditService.prototype.resetTransformSubjects = function () {
        this.transformSubj.next(new transformation_1.Transformation('', null, []));
        this.ruleSubj.next(new transformation_1.Rule('', '', '', null, []));
        this.ruleSourceFieldsSubj.next([]);
        this.conditionsSubj.next([]);
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
    MapAddEditService.prototype.addRuleSourceField = function () {
        //Use concat here since push would return the length of the array post push
        this.ruleSourceFieldsSubj.next(this.ruleSourceFieldsSubj.getValue().concat(new transformation_1.RuleSourceField(this.rsfSeqNum++, '', '', '', null)));
    };
    MapAddEditService.prototype.removeRuleSourceField = function (ruleSourceField) {
        //Use filter in order to return list
        var ruleSourceFields = this.ruleSourceFieldsSubj.getValue();
        var removeIndex = ruleSourceFields.indexOf(ruleSourceField);
        for (var i = removeIndex; i < ruleSourceFields.length; i++) {
            ruleSourceFields[i].seqNum--;
        }
        var filtered = ruleSourceFields.filter(function (el) { return el != ruleSourceField; });
        this.ruleSourceFieldsSubj.next(filtered);
    };
    //Condition methods
    MapAddEditService.prototype.setConditions = function (conditions) {
        this.conditionsSubj.next(conditions);
    };
    MapAddEditService.prototype.getConditions = function () {
        return this.conditionsSubj.asObservable();
    };
    MapAddEditService.prototype.addCondition = function () {
        //Use concat here since push would return the length of the array post push
        this.conditionsSubj.next(this.conditionsSubj.getValue().concat(new transformation_1.Condition(this.condSeqNum++, '', '', '', '', '', null)));
    };
    MapAddEditService.prototype.removeCondition = function (condition) {
        //Use filter in order to return list
        var conditions = this.conditionsSubj.getValue();
        var removeIndex = conditions.indexOf(condition);
        for (var i = removeIndex; i < conditions.length; i++) {
            conditions[i].seqNum--;
        }
        var filtered = conditions.filter(function (el) { return el != condition; });
        this.conditionsSubj.next(filtered);
    };
    MapAddEditService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], MapAddEditService);
    return MapAddEditService;
}());
exports.MapAddEditService = MapAddEditService;
//# sourceMappingURL=map-addedit.service.js.map