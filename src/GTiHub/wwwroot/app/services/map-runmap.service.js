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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var data_service_1 = require('./data.service');
var filepackage_1 = require('../map/run-map/filepackage');
var map_1 = require('../map/map');
var RunMapService = (function () {
    function RunMapService(_dataService) {
        this._dataService = _dataService;
        //Array of FilePackages which will be appended to formdata
        this.filePackagesSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.mapsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.selectedMapIdSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.initMaps();
    }
    //On changing selected mapping
    RunMapService.prototype.initFilePackages = function (mapId) {
        var _this = this;
        var filepackages = new Array();
        this._dataService.GetAllWithId('Maps/MapSources', mapId).subscribe(function (sources) {
            sources.forEach(function (source) {
                filepackages.push(new filepackage_1.FilePackage(false, source['sourceId'], source['description'], true, 1, '', null));
            });
            if (filepackages.length == 1) {
                filepackages[0].isPrimarySource = true;
            }
            _this.filePackagesSubj.next(filepackages);
            _this.selectedMapIdSubj.next(mapId);
        });
    };
    RunMapService.prototype.initMaps = function () {
        var _this = this;
        //Returns an object
        this._dataService.GetAll('Maps').subscribe(function (maps) {
            var selectMaps = new Array();
            maps.forEach(function (map) {
                selectMaps.push(new map_1.Map(map["description"], map["effective_Date"], map["active"], map["transformations"], map["mapId"]));
            });
            _this.mapsSubj.next(selectMaps);
        });
    };
    RunMapService.prototype.getMaps = function () {
        return this.mapsSubj.asObservable();
    };
    RunMapService.prototype.getFilePackages = function () {
        return this.filePackagesSubj.asObservable();
    };
    RunMapService.prototype.getSelectedMapId = function () {
        return this.selectedMapIdSubj.asObservable();
    };
    RunMapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], RunMapService);
    return RunMapService;
}());
exports.RunMapService = RunMapService;
//# sourceMappingURL=map-runmap.service.js.map