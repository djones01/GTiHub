import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Response, Headers } from '@angular/http';
import { Transformation } from './transformation';
import { Subscription }   from 'rxjs/Subscription';
import { MapAddEditService } from '../services/map-addedit.service';

@Component({
    selector: 'transform-addedit',
    templateUrl: 'app/transformation/transform-addedit.component.html',
    providers: [DataService],
})
export class TransformAddEditComponent implements OnInit {
    //Transformation which is currently being added or edited
    public addEditTransform: Transformation = new Transformation('', null, null, []);

    //Toggles whether or not to show the Transformation components
    addingTransform: boolean = false;
    active: boolean = true;

    cancelTransform() {
        this.mapAddEditService.setAddingTransform(false);
    }

    constructor(private _dataService: DataService, private mapAddEditService: MapAddEditService) {
    }
    ngOnInit(): void {

    }
}