import { Component, ViewChild, OnInit, Input, OnDestroy } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Response, Headers } from "@angular/http";
import { TargetField, Target } from "../target";
import { Subscription } from "rxjs/Subscription";
import { TFieldSelectService } from "../../services/target-select.service";

@Component({
    selector: "targetfield-list",
    templateUrl: "app/target/selection/targetfield-list.component.html",
    providers: [DataService],
})
export class TargetFieldListComponent implements OnInit, OnDestroy {
    private targetFields: TargetField[] = [];
    private selectedTargetField: TargetField;

    filterSubscription: Subscription;
    selectedSubscription: Subscription;

    onSelectTargetField(targetField: TargetField): void {
        this.selectService.setSelectedTargetField(targetField);
    }

    constructor(private _dataService: DataService, private selectService: TFieldSelectService) {}

    ngOnInit(): void {
        this.filterSubscription = this.selectService.getFilteredTargetFields()
            .subscribe((targetFields: TargetField[]) => this.targetFields = targetFields);
        this.selectedSubscription = this.selectService.getSelectedTargetField()
            .subscribe(targetField => this.selectedTargetField = targetField);
    }

    ngOnDestroy(): void {
        this.filterSubscription.unsubscribe();
        this.selectedSubscription.unsubscribe();
    }
}