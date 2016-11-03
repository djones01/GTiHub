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
var TransformAddEditComponent = (function () {
    function TransformAddEditComponent(_dataService, mapAddEditService) {
        this._dataService = _dataService;
        this.mapAddEditService = mapAddEditService;
        //Toggles whether or not to show the Transformation components
        this.active = true;
    }
    TransformAddEditComponent.prototype.onSubmit = function () {
        //Create or update the transform currently being worked on
        this.mapAddEditService.createOrUpdateTransform();
        this.mapAddEditService.addingOrModifyingTransform(false);
    };
    TransformAddEditComponent.prototype.clearTransform = function () {
        var _this = this;
        this.active = false;
        this.mapAddEditService.resetTransformSubjects();
        setTimeout(function () { return _this.active = true; }, 0);
    };
    TransformAddEditComponent.prototype.cancelTransform = function () {
        this.mapAddEditService.addingOrModifyingTransform(false);
        this.mapAddEditService.resetTransformSubjects();
    };
    TransformAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.transformSubscription = this.mapAddEditService.getTransform().subscribe(function (transform) { return _this.transform = transform; });
    };
    TransformAddEditComponent.prototype.ngOnDestroy = function () {
        this.transformSubscription.unsubscribe();
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