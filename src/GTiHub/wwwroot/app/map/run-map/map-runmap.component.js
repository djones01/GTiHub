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
var map_runmap_service_1 = require("../../services/map-runmap.service");
var RunMapComponent = (function () {
    function RunMapComponent(runMapService) {
        this.runMapService = runMapService;
    }
    RunMapComponent.prototype.onMapChange = function (mapId) {
        this.runMapService.initFilePackages(mapId);
    };
    RunMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapSubscription = this.runMapService.getMaps().subscribe(function (maps) { return _this.maps = maps; });
    };
    RunMapComponent.prototype.ngOnDestroy = function () {
        this.mapSubscription.unsubscribe();
    };
    RunMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "map-runmap",
            templateUrl: "map-runmap.component.html",
            providers: [map_runmap_service_1.RunMapService]
        }), 
        __metadata('design:paramtypes', [map_runmap_service_1.RunMapService])
    ], RunMapComponent);
    return RunMapComponent;
}());
exports.RunMapComponent = RunMapComponent;
//# sourceMappingURL=map-runmap.component.js.map