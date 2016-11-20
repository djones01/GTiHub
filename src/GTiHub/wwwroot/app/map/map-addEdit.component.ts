import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../services/data.service";
import { Response, Headers } from "@angular/http";
import { Transformation } from "../transformation/transformation";
import { Map } from "./map";
import { MapAddEditService } from "../services/map-addedit.service";
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: "map-addedit",
    templateUrl: "app/map/map-addedit.component.html"
})
export class MapAddEditComponent implements OnInit, OnDestroy {
    //Map which is being added or edited
    map: Map;
    //List of Transformations for the map
    transformations: Transformation[];
    //Whether or not we're editing a map currently
    editingMap: boolean;
    //Toggles whether or not to show the Transformation components
    addingTransform: boolean;
    active = true;

    //Subscriptions for map create service
    mapSubscription: Subscription;
    addingTransformSubscription: Subscription;
    mapTransformsSubscription: Subscription;
    mapHasTransformSubscription: Subscription;
    editingMapSubscription: Subscription;

    //Sets the transform for editing
    editTransform(transform: Transformation) {
        this.mapAddEditService.addingOrModifyingTransform(true);
        this.mapAddEditService.setTransform(transform, true);
    }

    //Delete a transform

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
        this.addingTransformSubscription = this.mapAddEditService.getAddingOrModifyingTransform()
            .subscribe(addingTransform => this.addingTransform = addingTransform);
        this.mapTransformsSubscription = this.mapAddEditService.getMapTransforms()
            .subscribe(mapTransforms => this.transformations = mapTransforms);
        this.mapSubscription = this.mapAddEditService.getMap().subscribe(map => this.map = map);
        this.editingMapSubscription = this.mapAddEditService.getAddingOrModifyingMap()
            .subscribe(editingMap => this.editingMap = editingMap);
    }

    ngOnDestroy(): void {
        this.addingTransformSubscription.unsubscribe();
        this.mapTransformsSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
        this.editingMapSubscription.unsubscribe();
    }
}