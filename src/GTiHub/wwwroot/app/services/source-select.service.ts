import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Source, SourceField } from '../source/source';
import { DataService } from './dataService';

@Injectable()
export class SFieldSelectService {
    private selectedSource: Source = null;
    private selectedSourceField: SourceField = null;
    private filteredSourceFields: SourceField[] = [];

    private selectedSourceSubj = new Subject<Source>();
    private selectedSourceFieldSubj = new Subject<SourceField>();
    private filteredSourceFieldsSubj = new Subject<SourceField[]>();
    private hasSourceFieldSubj = new Subject<boolean>();

    //Source methods
    setSelectedSource(source: Source) {
        this.selectedSource = source;
        this.selectedSourceSubj.next(source);

        //Set the availabel source fields
        this._dataService.GetSingle('SourceSelect', this.selectedSource["sourceId"])
            .subscribe(sourceFields => {
                this.filteredSourceFields = sourceFields
                this.filteredSourceFieldsSubj.next(sourceFields);
            });   

        this.hasSourceFieldSubj.next(false);
    }
    getSelectedSource(): Observable<Source> {
        return this.selectedSourceSubj.asObservable();
    }

    //Sourcefield methods
    setSelectedSourceField(sourceField: SourceField) {
        this.selectedSourceField = sourceField;
        this.selectedSourceFieldSubj.next(sourceField);

        this.hasSourceFieldSubj.next(true);
    }
    getSelectedSourceField(): Observable<SourceField> {
        return this.selectedSourceFieldSubj.asObservable();
    }

    //Filtered sourcefields
    getFilteredSourceFields(): Observable<SourceField[]> {
        return this.filteredSourceFieldsSubj.asObservable();
    }

    //Whether or not the modal has a selected sourcefield
    hasSelectedSourceField(): Observable<boolean> {
        return this.hasSourceFieldSubj.asObservable();
    }

    constructor(private _dataService: DataService) {
        
    }

}