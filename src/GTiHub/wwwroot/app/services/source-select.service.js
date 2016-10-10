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
var Subject_1 = require('rxjs/Subject');
var dataService_1 = require('./dataService');
var SFieldSelectService = (function () {
    function SFieldSelectService(_dataService) {
        this._dataService = _dataService;
        this.selectedSource = null;
        this.selectedSourceField = null;
        this.filteredSourceFields = [];
        this.selectedSourceSubj = new Subject_1.Subject();
        this.selectedSourceFieldSubj = new Subject_1.Subject();
        this.filteredSourceFieldsSubj = new Subject_1.Subject();
        this.hasSourceFieldSubj = new Subject_1.Subject();
    }
    //Source methods
    SFieldSelectService.prototype.setSelectedSource = function (source) {
        var _this = this;
        this.selectedSource = source;
        this.selectedSourceSubj.next(source);
        //Set the availabel source fields
        this._dataService.GetSingle('SourceSelect', this.selectedSource["sourceId"])
            .subscribe(function (sourceFields) {
            _this.filteredSourceFields = sourceFields;
            _this.filteredSourceFieldsSubj.next(sourceFields);
        });
        this.hasSourceFieldSubj.next(false);
    };
    SFieldSelectService.prototype.getSelectedSource = function () {
        return this.selectedSourceSubj.asObservable();
    };
    //Sourcefield methods
    SFieldSelectService.prototype.setSelectedSourceField = function (sourceField) {
        this.selectedSourceField = sourceField;
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
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], SFieldSelectService);
    return SFieldSelectService;
}());
exports.SFieldSelectService = SFieldSelectService;
//# sourceMappingURL=source-select.service.js.map