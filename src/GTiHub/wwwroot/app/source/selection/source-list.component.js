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
var dataService_1 = require('../../services/dataService');
var source_select_service_1 = require('../../services/source-select.service');
var SourceListComponent = (function () {
    function SourceListComponent(_dataService, selectService) {
        this._dataService = _dataService;
        this.selectService = selectService;
        this.sources = [];
    }
    SourceListComponent.prototype.onSelectSource = function (source) {
        this.selectService.setSelectedSource(source);
    };
    SourceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataService.GetAll('Sources').subscribe(function (sources) { return _this.sources = sources; }, function (error) { return console.log(error); });
        this.selectedSubscription = this.selectService.getSelectedSource().subscribe(function (selectedSource) { _this.selectedSource = selectedSource; });
    };
    SourceListComponent.prototype.ngOnDestroy = function () {
        this.selectedSubscription.unsubscribe();
    };
    SourceListComponent = __decorate([
        core_1.Component({
            selector: 'source-list',
            templateUrl: 'app/source/selection/source-list.component.html',
            providers: [dataService_1.DataService],
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, source_select_service_1.SFieldSelectService])
    ], SourceListComponent);
    return SourceListComponent;
}());
exports.SourceListComponent = SourceListComponent;
//# sourceMappingURL=source-list.component.js.map