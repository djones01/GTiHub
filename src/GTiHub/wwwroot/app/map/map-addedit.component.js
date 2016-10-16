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
var map_1 = require('./map');
var map_addedit_service_1 = require('../services/map-addedit.service');
var MapAddEditComponent = (function () {
    function MapAddEditComponent(_dataService, mapAddEditService) {
        this._dataService = _dataService;
        this.mapAddEditService = mapAddEditService;
        //Map which is being added or edited
        this.addEditMap = new map_1.Map('', '', true, null);
        //List of Transformations for the map
        this.transformations = [];
        this.active = true;
    }
    //Sets the visible component to the transform add/edit component
    MapAddEditComponent.prototype.addNewTransform = function () {
        this.mapAddEditService.setAddingTransform(true);
    };
    MapAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addingTransformSubscription = this.mapAddEditService.getAddingTransform().subscribe(function (addingTransform) { return _this.addingTransform = addingTransform; });
    };
    MapAddEditComponent.prototype.ngOnDestroy = function () {
        this.addingTransformSubscription.unsubscribe();
    };
    MapAddEditComponent = __decorate([
        core_1.Component({
            selector: 'map-addedit',
            templateUrl: 'app/map/map-addedit.component.html',
            providers: [data_service_1.DataService, map_addedit_service_1.MapAddEditService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, map_addedit_service_1.MapAddEditService])
    ], MapAddEditComponent);
    return MapAddEditComponent;
}());
exports.MapAddEditComponent = MapAddEditComponent;
//# sourceMappingURL=map-addedit.component.js.map