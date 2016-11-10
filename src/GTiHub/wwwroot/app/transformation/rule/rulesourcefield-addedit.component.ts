import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response, Headers } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SourceFieldListComponent } from '../../source/selection/sourcefield-list.component';
import { SourceListComponent } from '../../source/selection/source-list.component';
import { FieldFormatComponent } from './field-format.component';
import { SFieldSelectService } from '../../services/source-select.service';
import { Subscription }   from 'rxjs/Subscription';
import { SourceField } from '../../source/source';
import { RuleSourceField } from '../transformation';
import { MapAddEditService } from '../../services/map-addedit.service';

@Component({
    selector: 'rulesourcefield-addedit',
    templateUrl: 'app/transformation/rule/rulesourcefield-addedit.component.html',
    providers: [DataService, SFieldSelectService]
})
export class RuleSourceFieldAddEditComponent implements OnInit, OnDestroy {
    //List of rule source fields currently in the component
    ruleSourceFields: RuleSourceField[];
    hasSelectedSourceField: boolean;
    selectedSourceField: any;
    selectingRuleSourceField: RuleSourceField;
    seqNum: number;

    //Modal subscriptions
    hasSelectedSubscription: Subscription;
    getSelectedSubscription: Subscription;
    //Map creation subscriptions
    getRuleSourceSubscription: Subscription;


    //Modal Functions
    closeResult: string;
    openSourceSelect(content, ruleSourceField) {
        this.selectingRuleSourceField = ruleSourceField;
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            //User selected source field in modal
            if (result == 'Select SField') {
                this.selectingRuleSourceField.sourceField = this.selectedSourceField;
            }
        }, (reason) => {});
    }

    addRuleSourceField() {
        this.MapAddEditService.addRuleSourceField();
    }

    removeRuleSourceField(ruleSourceField) {
        this.MapAddEditService.removeRuleSourceField(ruleSourceField);
    }

    constructor(private _dataService: DataService, private modalService: NgbModal, private selectService: SFieldSelectService, private MapAddEditService: MapAddEditService) {
        this.ruleSourceFields = [];
        this.seqNum = 1;
        this.hasSelectedSourceField = false;
    }
    ngOnInit(): void {
        //Modal subscriptions
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField().subscribe(hasSelectedSourceField => this.hasSelectedSourceField = hasSelectedSourceField);
        this.getSelectedSubscription = this.selectService.getSelectedSourceField().subscribe(selectedSourceField => this.selectedSourceField = selectedSourceField);
        //Map creation subscriptions
        this.getRuleSourceSubscription = this.MapAddEditService.getRuleSourceFields().subscribe(ruleSourceFields => this.ruleSourceFields = ruleSourceFields);
    }
    ngOnDestroy(): void {
        //Modal subscriptions
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
        //Map creation subscriptions
        this.getRuleSourceSubscription.unsubscribe();
    }
}