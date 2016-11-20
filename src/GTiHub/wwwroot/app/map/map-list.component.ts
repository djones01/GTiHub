import { Component, ViewChild, OnInit, OnDestroy } from "@angular/core";
import { DataService } from "../services/data.service";
import { Map } from "./map";
import { MapAddEditService } from "../services/map-addedit.service";
import { Subscription } from "rxjs/Subscription";


@Component({
    selector: "map-list",
    templateUrl: "app/map/map-list.component.html",
    providers: [DataService, MapAddEditService]
})
export class MapListComponent implements OnInit, OnDestroy {
    //List of maps currently in the project
    maps: Map[];
    editingMap = false;

    //Subscriptions
    mapsSubscription: Subscription;
    editingMapSubscription: Subscription;

    editMap(map: Map) {
        this.mapAddEditService.setEditMap(map);
    }

    deleteMap(map: Map) {
        this.mapAddEditService.deleteMap(map);
    }

    constructor(private mapAddEditService: MapAddEditService) {
    }

    ngOnInit(): void {
        this.mapsSubscription = this.mapAddEditService.getMapsList()
            .subscribe(maps => {
                this.maps = maps;
            });
        this.editingMapSubscription = this.mapAddEditService.getAddingOrModifyingMap()
            .subscribe(editingMap => this.editingMap = editingMap);
    }

    ngOnDestroy(): void {
        this.mapsSubscription.unsubscribe();
        this.editingMapSubscription.unsubscribe();
    }
}