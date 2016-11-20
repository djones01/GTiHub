import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Response, Headers } from "@angular/http";
import { Condition } from "../transformation";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { SourceFieldListComponent } from "../../source/selection/sourcefield-list.component";
import { SourceListComponent } from "../../source/selection/source-list.component";
import { SFieldSelectService } from "../../services/source-select.service";
import { Subscription } from "rxjs/Subscription";
import { MapAddEditService } from "../../services/map-addedit.service";
import { SourceField } from "../../source/source";

@Component({
    selector: "condition-addedit",
    templateUrl: "app/transformation/condition/condition-addedit.component.html",
    providers: [DataService, SFieldSelectService]
})
export class ConditionAddEditComponent implements OnInit, OnDestroy {
    active = true;
    selectingCondition: Condition;
    hasSelectedSourceField = false;
    selectedSourceField: SourceField;
    //List of Conditions currently in the add/edit list
    conditions: Condition[] = [];

    //Options for operator selection
    private dateNumOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" },
        { value: "<", display: "less than" },
        { value: "<=", display: "less than or equal" },
        { value: ">", display: "greater than" },
        { value: ">=", display: "greater than or equal" },
    ];

    private textOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" }
        //TODO: Contains, doesn't contain, begins with, ends with
    ];

    private boolOpts = [
        { value: "==", display: "equals" },
        { value: "!=", display: "not equal" }
    ];

    //Modal subscriptions
    hasSelectedSubscription: Subscription;
    getSelectedSubscription: Subscription;
    //Map create subscriptions
    getConditionsSubscription: Subscription;


    //Modal Functions
    openSourceSelect(content, condition) {
        this.selectingCondition = condition;
        this.modalService.open(content, { size: "lg" })
            .result.then((result) => {
                    //User selected source field in modal
                    if (result == "Select SField") {
                        this.selectingCondition.sourceField = this.selectedSourceField;
                        this.selectingCondition = null;
                    }
                },
                (reason) => {});
    }

    removeCondition(condition) {
        this.mapAddEditService.removeCondition(condition);
    }

    //Add a new condition to the list of conditions
    addCondition() {
        this.mapAddEditService.addCondition();
    }

    constructor(private _dataService: DataService,
        private modalService: NgbModal,
        private selectService: SFieldSelectService,
        private mapAddEditService: MapAddEditService) {
    }

    ngOnInit(): void {
        //Modal subscriptions
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField()
            .subscribe(hasSelectedSourceField => this.hasSelectedSourceField = hasSelectedSourceField);
        this.getSelectedSubscription = this.selectService.getSelectedSourceField()
            .subscribe(selectedSourceField => this.selectedSourceField = selectedSourceField);
        //Map create subscriptions
        this.getConditionsSubscription = this.mapAddEditService.getConditions()
            .subscribe(conditions => this.conditions = conditions);
    }

    ngOnDestroy(): void {
        //Modal subscriptions
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
        //Map create subscriptions
        this.getConditionsSubscription.unsubscribe();
    }
}