import { Component, ViewChild, OnInit, Output, OnDestroy } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Response, Headers } from "@angular/http";
import { Source } from "../source";
import { SFieldSelectService } from "../../services/source-select.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "source-list",
    templateUrl: "app/source/selection/source-list.component.html",
    providers: [DataService],
})
export class SourceListComponent implements OnInit, OnDestroy {
    private sources: Source[] = [];
    private selectedSource: Source;

    selectedSubscription: Subscription;
    sourcesSubscription: Subscription;

    onSelectSource(source: Source) {
        this.selectService.setSelectedSource(source);
    }

    constructor(private _dataService: DataService, private selectService: SFieldSelectService) {
    }

    ngOnInit(): void {
        this.selectedSubscription = this.selectService.getSelectedSource()
            .subscribe(selectedSource => { this.selectedSource = selectedSource });
        this.sourcesSubscription = this.selectService.getSources().subscribe(sources => this.sources = sources);
        this.selectService.initSources();
    }

    ngOnDestroy(): void {
        this.selectedSubscription.unsubscribe();
        this.sourcesSubscription.unsubscribe();
    }
}