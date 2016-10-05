import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { Response, Headers } from '@angular/http';

@Component({
    selector: 'map-addedit',
    templateUrl: 'app/map/map-addedit.component.html',
    providers: [DataService],
})
export class MapAddEditComponent implements OnInit {
    constructor(private _dataService: DataService) {
    }

    //Toggles whether or not to show the Transformation components
    addingTransform: boolean = false;
    active: boolean = true;
    
    ngOnInit(): void {
        
    }
}