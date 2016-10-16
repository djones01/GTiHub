import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Response, Headers } from '@angular/http';
import { Transformation } from '../transformation/transformation';
import { Map } from './map';
import { MapAddEditService } from '../services/map-addedit.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'map-addedit',
    templateUrl: 'app/map/map-addedit.component.html',
    providers: [DataService, MapAddEditService],
})
export class MapAddEditComponent implements OnInit, OnDestroy {
    //Map which is being added or edited
    public addEditMap: Map = new Map('', '', true, null);
    //List of Transformations for the map
    public transformations: Transformation[] = [];
    //Toggles whether or not to show the Transformation components
    addingTransform: boolean;
    active: boolean = true;

    //Subscriptions for map create service
    addingTransformSubscription: Subscription;

    //Sets the visible component to the transform add/edit component
    addNewTransform() {
        this.mapAddEditService.setAddingTransform(true);
    }



    constructor(private _dataService: DataService, private mapAddEditService: MapAddEditService) {
    }
    ngOnInit(): void {
        this.addingTransformSubscription = this.mapAddEditService.getAddingTransform().subscribe(addingTransform => this.addingTransform = addingTransform);
    }
    ngOnDestroy(): void {
        this.addingTransformSubscription.unsubscribe();
    }
}