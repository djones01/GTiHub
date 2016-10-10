import { Component, ViewChild, OnInit, Output, OnDestroy } from '@angular/core';
import { DataService } from '../../services/dataService';
import { Response, Headers } from '@angular/http';
import { Source } from '../source';
import { SFieldSelectService } from '../../services/source-select.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'source-list',
    templateUrl: 'app/source/selection/source-list.component.html',
    providers: [DataService],
})
export class SourceListComponent implements OnInit, OnDestroy {
    private sources: Source[] = [];
    private selectedSource: Source;

    selectedSubscription: Subscription;

    onSelectSource(source: Source) {
        this.selectService.setSelectedSource(source);
    }

    constructor(private _dataService: DataService, private selectService: SFieldSelectService) {
    }
    ngOnInit(): void {
        this._dataService.GetAll('Sources').subscribe(sources => this.sources = sources, error => console.log(error));
        this.selectedSubscription = this.selectService.getSelectedSource().subscribe((selectedSource: Source) => { this.selectedSource = selectedSource });
    }
    ngOnDestroy(): void {
        this.selectedSubscription.unsubscribe();
    }
}