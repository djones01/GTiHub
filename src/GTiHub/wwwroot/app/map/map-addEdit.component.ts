import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Response, Headers } from '@angular/http';
import { Transformation } from '../transformation/transformation';
import { Map } from './map';
import { MapAddEditService } from '../services/map-addedit.service';
import { Subscription }   from 'rxjs/Subscription';
import { SFieldSelectService } from '../services/source-select.service';
import { TFieldSelectService } from '../services/target-select.service';

@Component({
    selector: 'map-addedit',
    templateUrl: 'app/map/map-addedit.component.html',
    providers: [DataService, MapAddEditService, SFieldSelectService, TFieldSelectService],
})
export class MapAddEditComponent implements OnInit, OnDestroy {
    //Map which is being added or edited
    public map: Map;
    //List of Transformations for the map
    public transformations: Transformation[];
    //Toggles whether or not to show the Transformation components
    public addingTransform: boolean;
    active: boolean = true;

    //Subscriptions for map create service
    mapSubscription: Subscription;
    addingTransformSubscription: Subscription;
    mapTransformsSubscription: Subscription;
    mapHasTransformSubscription: Subscription;

    //Sets the visible component to the transform add/edit component
    addNewTransform() {
        this.mapAddEditService.addingOrModifyingTransform(true);    
    }

    onSubmit() {
        this.mapAddEditService.addOrUpdateMap();
    }

    constructor(private _dataService: DataService, private mapAddEditService: MapAddEditService) {    
    }
    ngOnInit(): void {
        this.addingTransformSubscription = this.mapAddEditService.getAddingOrModifyingTransform().subscribe(addingTransform => this.addingTransform = addingTransform);
        this.mapTransformsSubscription = this.mapAddEditService.getMapTransforms().subscribe(mapTransforms => this.transformations = mapTransforms);
        this.mapSubscription = this.mapAddEditService.getMap().subscribe(map => this.map = map);
    }
    ngOnDestroy(): void {
        this.addingTransformSubscription.unsubscribe();
        this.mapTransformsSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
    }
}