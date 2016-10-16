import { Component, ViewChild, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response, Headers } from '@angular/http';
import { SourceField, Source } from '../source';
import { Subscription }   from 'rxjs/Subscription';
import { SFieldSelectService } from '../../services/source-select.service';

@Component({
    selector: 'sourcefield-list',
    templateUrl: 'app/source/selection/sourcefield-list.component.html',
    providers: [DataService],
})
export class SourceFieldListComponent implements OnInit, OnDestroy {
    private sourceFields: SourceField[] = [];
    private selectedSourceField: SourceField;

    filterSubscription: Subscription;
    selectedSubscription: Subscription;

    onSelectSourceField(sourceField: SourceField): void {
        this.selectService.setSelectedSourceField(sourceField);
    }

    constructor(private _dataService: DataService, private selectService: SFieldSelectService) {}
    ngOnInit(): void {
        this.filterSubscription = this.selectService.getFilteredSourceFields().subscribe((sourceFields: SourceField[]) => this.sourceFields = sourceFields);
        this.selectedSubscription = this.selectService.getSelectedSourceField().subscribe(sourceField => this.selectedSourceField = sourceField);
    }
    ngOnDestroy(): void {
        this.filterSubscription.unsubscribe();
        this.selectedSubscription.unsubscribe();
    }
}