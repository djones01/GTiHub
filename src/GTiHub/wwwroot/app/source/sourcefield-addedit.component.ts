import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { Source, SourceField } from "./source";
import { DataService } from "../services/data.service";
import { FileUploader, FileSelectDirective } from "ng2-file-upload";
import { SourceAddEditService } from "../services/source-addedit.service";
import { Response, Headers } from "@angular/http";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "sourcefield-addedit",
    templateUrl: "app/source/sourcefield-addedit.component.html",
    providers: [DataService],
})
export class SourceFieldAddEditComponent implements OnInit, OnDestroy {
    sourceFields: SourceField[] = [];

    //Subscriptions
    sourceFieldSubscription: Subscription;

    private options = [
        { value: "url", display: "URL" },
        { value: "text", display: "Text" },
        { value: "date", display: "Date" },
        { value: "bool", display: "Boolean" },
        { value: "num", display: "Number" },
        { value: "currency", display: "Currency" },
        { value: "email", display: "Email" }
    ];

    removeSourceField(sourceField, i) {
        this.sourceAddEditService.removeSourceField(sourceField, i);
    }

    constructor(private _dataService: DataService, private sourceAddEditService: SourceAddEditService) {
    }

    ngOnInit(): void {
        this.sourceFieldSubscription = this.sourceAddEditService.getSourceFields()
            .subscribe(sourceFields => this.sourceFields = sourceFields);
    }

    ngOnDestroy(): void {
        this.sourceFieldSubscription.unsubscribe();
    }
}