import { Component, ViewChild, OnInit } from '@angular/core';
import { DataService } from '../services/dataService';
import { Response, Headers } from '@angular/http';
import { Transformation } from './transformation';

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

    constructor(private _dataService: DataService) {
    }
    ngOnInit(): void {

    }
}