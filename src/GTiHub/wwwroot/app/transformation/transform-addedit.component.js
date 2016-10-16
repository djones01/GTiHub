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
var transformation_1 = require('./transformation');
var map_addedit_service_1 = require('../services/map-addedit.service');
var TransformAddEditComponent = (function () {
    function TransformAddEditComponent(_dataService, mapAddEditService) {
        this._dataService = _dataService;
        this.mapAddEditService = mapAddEditService;
        //Transformation which is currently being added or edited
        this.addEditTransform = new transformation_1.Transformation('', null, null, []);
        //Toggles whether or not to show the Transformation components
        this.addingTransform = false;
        this.active = true;
    }
    TransformAddEditComponent.prototype.cancelTransform = function () {
        this.mapAddEditService.setAddingTransform(false);
    };
    TransformAddEditComponent.prototype.ngOnInit = function () {
    };
    TransformAddEditComponent = __decorate([
        core_1.Component({
            selector: 'transform-addedit',
            templateUrl: 'app/transformation/transform-addedit.component.html',
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, map_addedit_service_1.MapAddEditService])
    ], TransformAddEditComponent);
    return TransformAddEditComponent;
}());
exports.TransformAddEditComponent = TransformAddEditComponent;
//# sourceMappingURL=transform-addedit.component.js.map