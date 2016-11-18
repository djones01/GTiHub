import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Response, Headers } from '@angular/http';
import { Transformation } from './transformation';
import { Subscription }   from 'rxjs/Subscription';
import { MapAddEditService } from '../services/map-addedit.service';
import { SFieldSelectService } from '../services/source-select.service';
import { TFieldSelectService } from '../services/target-select.service';


@Component({
    selector: 'transform-addedit',
    templateUrl: 'app/transformation/transform-addedit.component.html',
    providers: [SFieldSelectService, TFieldSelectService]
})
export class TransformAddEditComponent implements OnInit, OnDestroy {
    //Transformation which is currently being added or edited
    public transform: Transformation;

    //Subscriptions
    transformSubscription: Subscription;

    //Toggles whether or not to show the Transformation components
    active: boolean = true;

    onSubmit() {
        //Create or update the transform currently being worked on
        this.mapAddEditService.createOrUpdateTransform();
        this.mapAddEditService.addingOrModifyingTransform(false);
    }

    clearTransform() {
        this.active = false;
        this.mapAddEditService.resetTransformSubjects();
        setTimeout(() => this.active = true, 0);
    }

    cancelTransform() {
        this.mapAddEditService.addingOrModifyingTransform(false);
        this.mapAddEditService.resetTransformSubjects();
    }

    constructor(private _dataService: DataService, private mapAddEditService: MapAddEditService) {    
    }
    ngOnInit(): void {
        this.transformSubscription = this.mapAddEditService.getTransform().subscribe(transform => this.transform = transform);
    }
    ngOnDestroy(): void {
        this.transformSubscription.unsubscribe();
    }
}