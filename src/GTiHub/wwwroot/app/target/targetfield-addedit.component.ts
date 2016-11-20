import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { Target, TargetField } from "./target";
import { DataService } from "../services/data.service";
import { FileUploader, FileSelectDirective } from "ng2-file-upload";
import { TargetAddEditService } from "../services/target-addedit.service";
import { Response, Headers } from "@angular/http";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "targetfield-addedit",
    templateUrl: "app/target/targetfield-addedit.component.html",
    providers: [DataService],
})
export class TargetFieldAddEditComponent implements OnInit, OnDestroy {
    targetFields: TargetField[] = [];

    //Subscriptions
    targetFieldSubscription: Subscription;

    private options = [
        { value: "url", display: "URL" },
        { value: "text", display: "Text" },
        { value: "date", display: "Date" },
        { value: "bool", display: "Boolean" },
        { value: "num", display: "Number" },
        { value: "currency", display: "Currency" },
        { value: "email", display: "Email" }
    ];

    removeTargetField(targetField, i) {
        this.targetAddEditService.removeTargetField(targetField, i);
    }

    constructor(private _dataService: DataService, private targetAddEditService: TargetAddEditService) {
    }

    ngOnInit(): void {
        this.targetFieldSubscription = this.targetAddEditService.getTargetFields()
            .subscribe(targetFields => this.targetFields = targetFields);
    }

    ngOnDestroy(): void {
        this.targetFieldSubscription.unsubscribe();
    }
}