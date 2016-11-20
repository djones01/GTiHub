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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var data_service_1 = require("./data.service");
var SFieldSelectService = (function () {
    function SFieldSelectService(_dataService) {
        this._dataService = _dataService;
        this.sourcesSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.selectedSourceSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.hasSelectedSourceSubj = new BehaviorSubject_1.BehaviorSubject(false);
        this.selectedSourceFieldSubj = new BehaviorSubject_1.BehaviorSubject(null);
        this.filteredSourceFieldsSubj = new BehaviorSubject_1.BehaviorSubject([]);
        this.hasSourceFieldSubj = new BehaviorSubject_1.BehaviorSubject(false);
    }
    //Source methods
    SFieldSelectService.prototype.setSelectedSource = function (source) {
        var _this = this;
        this.selectedSourceSubj.next(source);
        this.hasSelectedSourceSubj.next(true);
        //Set the available source fields
        this._dataService.GetAllWithId("Sources/GetSourceFieldsBySource", this.selectedSourceSubj.getValue()["sourceId"])
            .subscribe(function (sourceFields) {
            _this.filteredSourceFieldsSubj.next(sourceFields);
        });
        this.hasSourceFieldSubj.next(false);
    };
    SFieldSelectService.prototype.getSelectedSource = function () {
        return this.selectedSourceSubj.asObservable();
    };
    SFieldSelectService.prototype.hasSelectedSource = function () {
        return this.hasSelectedSourceSubj.asObservable();
    };
    SFieldSelectService.prototype.getSources = function () {
        return this.sourcesSubj.asObservable();
    };
    SFieldSelectService.prototype.setSources = function (sources) {
        this.sourcesSubj.next(sources);
    };
    SFieldSelectService.prototype.addSource = function (source) {
        //Use concat here since push would return the length of the array post push
        this.sourcesSubj.next(this.sourcesSubj.getValue().concat(source));
    };
    SFieldSelectService.prototype.initSources = function () {
        var _this = this;
        this._dataService.GetAll("Sources")
            .subscribe(function (sources) { return _this.sourcesSubj.next(sources); }, function (error) { return console.log(error); });
    };
    //Sourcefield methods
    SFieldSelectService.prototype.setSelectedSourceField = function (sourceField) {
        this.selectedSourceFieldSubj.next(sourceField);
        this.hasSourceFieldSubj.next(true);
    };
    SFieldSelectService.prototype.getSelectedSourceField = function () {
        return this.selectedSourceFieldSubj.asObservable();
    };
    //Filtered sourcefields
    SFieldSelectService.prototype.getFilteredSourceFields = function () {
        return this.filteredSourceFieldsSubj.asObservable();
    };
    //Whether or not the modal has a selected sourcefield
    SFieldSelectService.prototype.hasSelectedSourceField = function () {
        return this.hasSourceFieldSubj.asObservable();
    };
    SFieldSelectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], SFieldSelectService);
    return SFieldSelectService;
}());
exports.SFieldSelectService = SFieldSelectService;
//# sourceMappingURL=source-select.service.js.map