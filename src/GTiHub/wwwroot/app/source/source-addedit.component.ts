import { Component, OnInit } from '@angular/core';
import { Source, SourceField } from './source';
import { DataService } from '../services/dataService';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { SourceFieldListComponent } from './sourcefield.list.component';

@Component({
    selector: 'source-addedit',
    templateUrl: 'app/source/source-addedit.component.html',
    providers: [DataService],
})
export class SourceAddEditComponent implements OnInit {
    //Control the template / manual header boxes
    sopt: boolean = true;

    sfieldCount: number = 0;

    private sources: Source[] = [];
    private addEditSource: Source = new Source('', '', '', true);

    public uploader: FileUploader = new FileUploader({ url: 'api/File/ExtractHeaders' });

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