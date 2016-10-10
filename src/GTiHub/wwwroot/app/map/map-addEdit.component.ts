import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';
import { Response, Headers } from '@angular/http';
import { Transformation } from '../transformation/transformation';
import { Map } from './map';

@Component({
    selector: 'map-addedit',
    templateUrl: 'app/map/map-addedit.component.html',
    providers: [DataService],
})
export class MapAddEditComponent implements OnInit {
    //Map which is being added or edited
    public addEditMap: Map = new Map('', '', true, null);
    //List of Transformations for the map
    public transformations: Transformation[] = [];
    //Toggles whether or not to show the Transformation components
    addingTransform: boolean = false;
    active: boolean = true;

    //Sets the visible component to the transform add/edit component
    addNewTransform() {
        this.addingTransform = true;
    }



    constructor(private _dataService: DataService) {
    }
    ngOnInit(): void {

    }
}