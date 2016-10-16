import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Transformation, Rule, RuleSourceField, Condition } from '../transformation/transformation';
import { DataService } from './data.service';

@Injectable()
export class MapAddEditService {
    //Values for tracking state of a map
    private mapSubj = new BehaviorSubject(null);
    private mapTransformsSubj = new BehaviorSubject(null);
    private mapAddingTransformSubj = new BehaviorSubject(false);

    //Values for tracking state of a transformation 
    private transformSubj = new BehaviorSubject(null);
    private ruleSubj = new BehaviorSubject(null);
    private ruleSourceFieldsSubj = new BehaviorSubject<Array<RuleSourceField>>([]);
    private conditionsSubj = new BehaviorSubject<Array<Condition>>([]);

    //Map methods
    setAddingTransform(addingTransform: boolean) {
        this.mapAddingTransformSubj.next(addingTransform);
    }
    getAddingTransform() {
        return this.mapAddingTransformSubj.asObservable();
    }


    //Transform methods
    setTransform(transform: Transformation) {
        this.transformSubj.next(transform);
    }
    getTransform() {
        return this.transformSubj.asObservable();
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
    addRuleSourceField(ruleSourceField: RuleSourceField) {
        //Use concat here since push would return the length of the array post push
        this.ruleSourceFieldsSubj.next(this.ruleSourceFieldsSubj.getValue().concat(ruleSourceField));
    }
    removeRuleSourceField(ruleSourceField: RuleSourceField) {
        //Use filter in order to return list
        var filtered = this.ruleSourceFieldsSubj.getValue().filter(function (el) { return el != ruleSourceField });
        this.ruleSourceFieldsSubj.next(filtered);
    }

    //Condition methods
    setConditions(conditions: Condition[]) {
        this.conditionsSubj.next(conditions);
    }
    getConditions() {
        return this.conditionsSubj.asObservable();
    }
    addCondition(condition: Condition) {
        //Use concat here since push would return the length of the array post push
        this.conditionsSubj.next(this.conditionsSubj.getValue().concat(condition));
    }
    removeCondition(condition: Condition, i) {
        //Use filter in order to return list
        var filtered = this.conditionsSubj.getValue().filter(function (el) { return el != condition });
        this.conditionsSubj.next(filtered);
    }

}