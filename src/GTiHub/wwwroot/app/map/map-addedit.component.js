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
var dataService_1 = require('../services/dataService');
var map_1 = require('./map');
var MapAddEditComponent = (function () {
    function MapAddEditComponent(_dataService) {
        this._dataService = _dataService;
        //Map which is being added or edited
        this.addEditMap = new map_1.Map('', '', true, null);
        //List of Transformations for the map
        this.transformations = [];
        //Toggles whether or not to show the Transformation components
        this.addingTransform = false;
        this.active = true;
    }
    //Sets the visible component to the transform add/edit component
    MapAddEditComponent.prototype.addNewTransform = function () {
        this.addingTransform = true;
    };
    MapAddEditComponent.prototype.ngOnInit = function () {
    };
    MapAddEditComponent = __decorate([
        core_1.Component({
            selector: 'map-addedit',
            templateUrl: 'app/map/map-addedit.component.html',
            providers: [dataService_1.DataService],
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], MapAddEditComponent);
    return MapAddEditComponent;
}());
exports.MapAddEditComponent = MapAddEditComponent;
//# sourceMappingURL=map-addedit.component.js.map