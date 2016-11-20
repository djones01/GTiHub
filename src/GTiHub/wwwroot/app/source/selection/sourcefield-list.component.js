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
var data_service_1 = require("../../services/data.service");
var source_select_service_1 = require("../../services/source-select.service");
var SourceFieldListComponent = (function () {
    function SourceFieldListComponent(_dataService, selectService) {
        this._dataService = _dataService;
        this.selectService = selectService;
        this.sourceFields = [];
    }
    SourceFieldListComponent.prototype.onSelectSourceField = function (sourceField) {
        this.selectService.setSelectedSourceField(sourceField);
    };
    SourceFieldListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterSubscription = this.selectService.getFilteredSourceFields()
            .subscribe(function (sourceFields) { return _this.sourceFields = sourceFields; });
        this.selectedSubscription = this.selectService.getSelectedSourceField()
            .subscribe(function (sourceField) { return _this.selectedSourceField = sourceField; });
    };
    SourceFieldListComponent.prototype.ngOnDestroy = function () {
        this.filterSubscription.unsubscribe();
        this.selectedSubscription.unsubscribe();
    };
    SourceFieldListComponent = __decorate([
        core_1.Component({
            selector: "sourcefield-list",
            templateUrl: "app/source/selection/sourcefield-list.component.html",
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, source_select_service_1.SFieldSelectService])
    ], SourceFieldListComponent);
    return SourceFieldListComponent;
}());
exports.SourceFieldListComponent = SourceFieldListComponent;
//# sourceMappingURL=sourcefield-list.component.js.map