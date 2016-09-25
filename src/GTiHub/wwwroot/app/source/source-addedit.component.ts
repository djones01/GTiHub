import { Component, OnInit } from '@angular/core';
import { Source } from './source';
import { DataService } from '../services/dataService';

@Component({
    selector: 'source-addedit',
    templateUrl: 'app/source/source-addedit.component.html',
    providers: [DataService]
})
export class SourceAddEditComponent implements OnInit {
    private sources: Source[] = [];
    private addEditSource: Source = new Source('', '', '', true);
   
    constructor(private _dataService: DataService) {
    }






    getSources() {
        this._dataService.GetAll('Sources').subscribe(sources => this.sources = sources);
    }

    //Reset the form
    active = true;

    newSource() {
        this.addEditSource = new Source('', '', '', true);
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit(): void {
        this.getSources();
    }
}