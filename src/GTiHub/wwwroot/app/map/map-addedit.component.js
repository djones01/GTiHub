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
var core_1 = require('@angular/core');
var data_service_1 = require('../services/data.service');
var map_addedit_service_1 = require('../services/map-addedit.service');
var source_select_service_1 = require('../services/source-select.service');
var target_select_service_1 = require('../services/target-select.service');
var MapAddEditComponent = (function () {
    function MapAddEditComponent(_dataService, mapAddEditService) {
        this._dataService = _dataService;
        this.mapAddEditService = mapAddEditService;
        this.active = true;
    }
    //Sets the visible component to the transform add/edit component
    MapAddEditComponent.prototype.addNewTransform = function () {
        this.mapAddEditService.addingOrModifyingTransform(true);
    };
    MapAddEditComponent.prototype.onSubmit = function () {
        this.mapAddEditService.addOrUpdateMap();
    };
    MapAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addingTransformSubscription = this.mapAddEditService.getAddingOrModifyingTransform().subscribe(function (addingTransform) { return _this.addingTransform = addingTransform; });
        this.mapTransformsSubscription = this.mapAddEditService.getMapTransforms().subscribe(function (mapTransforms) { return _this.transformations = mapTransforms; });
        this.mapSubscription = this.mapAddEditService.getMap().subscribe(function (map) { return _this.map = map; });
    };
    MapAddEditComponent.prototype.ngOnDestroy = function () {
        this.addingTransformSubscription.unsubscribe();
        this.mapTransformsSubscription.unsubscribe();
        this.mapSubscription.unsubscribe();
    };
    MapAddEditComponent = __decorate([
        core_1.Component({
            selector: 'map-addedit',
            templateUrl: 'app/map/map-addedit.component.html',
            providers: [data_service_1.DataService, map_addedit_service_1.MapAddEditService, source_select_service_1.SFieldSelectService, target_select_service_1.TFieldSelectService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, map_addedit_service_1.MapAddEditService])
    ], MapAddEditComponent);
    return MapAddEditComponent;
}());
exports.MapAddEditComponent = MapAddEditComponent;
//# sourceMappingURL=map-addedit.component.js.map