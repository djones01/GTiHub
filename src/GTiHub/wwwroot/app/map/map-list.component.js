"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var data_service_1 = require("../services/data.service");
var map_addedit_service_1 = require("../services/map-addedit.service");
var MapListComponent = (function () {
    function MapListComponent(mapAddEditService) {
        this.mapAddEditService = mapAddEditService;
        this.editingMap = false;
    }
    MapListComponent.prototype.editMap = function (map) {
        this.mapAddEditService.setEditMap(map);
    };
    MapListComponent.prototype.deleteMap = function (map) {
        this.mapAddEditService.deleteMap(map);
    };
    MapListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsSubscription = this.mapAddEditService.getMapsList()
            .subscribe(function (maps) {
            _this.maps = maps;
        });
        this.editingMapSubscription = this.mapAddEditService.getAddingOrModifyingMap()
            .subscribe(function (editingMap) { return _this.editingMap = editingMap; });
    };
    MapListComponent.prototype.ngOnDestroy = function () {
        this.mapsSubscription.unsubscribe();
        this.editingMapSubscription.unsubscribe();
    };
    MapListComponent = __decorate([
        core_1.Component({
            selector: "map-list",
            templateUrl: "app/map/map-list.component.html",
            providers: [data_service_1.DataService, map_addedit_service_1.MapAddEditService]
        }), 
        __metadata('design:paramtypes', [map_addedit_service_1.MapAddEditService])
    ], MapListComponent);
    return MapListComponent;
}());
exports.MapListComponent = MapListComponent;
//# sourceMappingURL=map-list.component.js.map