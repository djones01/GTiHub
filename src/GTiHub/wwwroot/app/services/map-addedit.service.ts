import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Transformation, Rule, RuleSourceField, Condition } from '../transformation/transformation';
import { Map } from '../map/map';
import { DataService } from './data.service';

@Injectable()
export class MapAddEditService {
    //------------------------------Subjects-----------------------------------------//

    //Values for tracking state of a map
    private mapSubj = new BehaviorSubject(new Map('','',true,[]));
    private mapTransformsSubj = new BehaviorSubject<Array<Transformation>>([]);
    private mapAddingOrModifyingTransSubj = new BehaviorSubject(false);

    //Values for tracking state of a transformation 
    private transformSubj = new BehaviorSubject(new Transformation('',null,[]));
    
    //Rule / rule source fields
    rsfSeqNum = 1;
    private ruleSubj = new BehaviorSubject(new Rule('', '', '', null, []));
    private ruleSourceFieldsSubj = new BehaviorSubject<Array<RuleSourceField>>([]);

    //Conditions
    condSeqNum = 1;
    private conditionsSubj = new BehaviorSubject<Array<Condition>>([]);

    //-------------------------------Methods-----------------------------------------//

    //Map methods
    getMap() {
        return this.mapSubj.asObservable();
    }
    addingOrModifyingTransform(addingTransform: boolean) {
        this.mapAddingOrModifyingTransSubj.next(addingTransform);
    }
    getAddingOrModifyingTransform() {
        return this.mapAddingOrModifyingTransSubj.asObservable();
    }
    getMapTransforms() {
        return this.mapTransformsSubj.asObservable();
    }
    removeMapTransform(transform: Transformation) {
        var filtered = this.mapTransformsSubj.getValue().filter(function (el) { return el != transform });
        this.mapTransformsSubj.next(filtered);
    }
    addOrUpdateMap() {
        var map = this.mapSubj.getValue();
        map.transformations = this.mapTransformsSubj.getValue();
        this._dataService.Add('Maps', map).subscribe(() => { }, error => console.log(error), ()=> { });
    }

    //Transform methods
    setTransform(transform: Transformation) {
        this.transformSubj.next(transform);
    }
    getTransform() {
        return this.transformSubj.asObservable();
    }
    createOrUpdateTransform() {
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
        //Currently editing a transform
        else {
        }
    }
    resetTransformSubjects() {
        this.transformSubj.next(new Transformation('', null, []));
        this.ruleSubj.next(new Rule('', '', '', null, []));
        this.ruleSourceFieldsSubj.next([]);
        this.conditionsSubj.next([]);
    }

    //Rule methods
    setRule(rule: Rule) {
        this.ruleSubj.next(rule);
    }
    getRule() {
        return this.ruleSubj.asObservable();
    }

    //Rule Source Fields methods
    setRuleSourceFields(ruleSourceFields: RuleSourceField[]) {
        this.ruleSourceFieldsSubj.next(ruleSourceFields);
    }
    getRuleSourceFields() {
        return this.ruleSourceFieldsSubj.asObservable();
    }
    addRuleSourceField() {
        //Use concat here since push would return the length of the array post push
        this.ruleSourceFieldsSubj.next(this.ruleSourceFieldsSubj.getValue().concat(new RuleSourceField(this.rsfSeqNum++, '', '', '', null)));
    }
    removeRuleSourceField(ruleSourceField: RuleSourceField) {
        //Use filter in order to return list
        var ruleSourceFields = this.ruleSourceFieldsSubj.getValue();
        var removeIndex = ruleSourceFields.indexOf(ruleSourceField);
        for (var i = removeIndex; i < ruleSourceFields.length; i++) {
            ruleSourceFields[i].seqNum--;
        }
        var filtered = ruleSourceFields.filter(function (el) { return el != ruleSourceField });
        this.ruleSourceFieldsSubj.next(filtered);
    }

    //Condition methods
    setConditions(conditions: Condition[]) {
        this.conditionsSubj.next(conditions);
    }
    getConditions() {
        return this.conditionsSubj.asObservable();
    }
    addCondition() {
        //Use concat here since push would return the length of the array post push
        this.conditionsSubj.next(this.conditionsSubj.getValue().concat(new Condition(this.condSeqNum++, (this.condSeqNum == 1) ? '' : 'or', '', '', '', '', null)));
    }
    removeCondition(condition: Condition) {
        //Use filter in order to return list
        var conditions = this.conditionsSubj.getValue();
        var removeIndex = conditions.indexOf(condition);
        for (var i = removeIndex; i < conditions.length; i++) {
            conditions[i].seqNum--;
        }
        var filtered = conditions.filter(function (el) { return el != condition });
        this.conditionsSubj.next(filtered);
    }

    constructor(private _dataService: DataService) {

    }
}