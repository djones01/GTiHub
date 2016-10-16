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
var data_service_1 = require('../../services/data.service');
var target_select_service_1 = require('../../services/target-select.service');
var TargetFieldListComponent = (function () {
    function TargetFieldListComponent(_dataService, selectService) {
        this._dataService = _dataService;
        this.selectService = selectService;
        this.targetFields = [];
    }
    TargetFieldListComponent.prototype.onSelectTargetField = function (targetField) {
        this.selectService.setSelectedTargetField(targetField);
    };
    TargetFieldListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterSubscription = this.selectService.getFilteredTargetFields().subscribe(function (targetFields) { return _this.targetFields = targetFields; });
        this.selectedSubscription = this.selectService.getSelectedTargetField().subscribe(function (targetField) { return _this.selectedTargetField = targetField; });
    };
    TargetFieldListComponent.prototype.ngOnDestroy = function () {
        this.filterSubscription.unsubscribe();
        this.selectedSubscription.unsubscribe();
    };
    TargetFieldListComponent = __decorate([
        core_1.Component({
            selector: 'targetfield-list',
            templateUrl: 'app/target/selection/targetfield-list.component.html',
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, target_select_service_1.TFieldSelectService])
    ], TargetFieldListComponent);
    return TargetFieldListComponent;
}());
exports.TargetFieldListComponent = TargetFieldListComponent;
//# sourceMappingURL=targetfield-list.component.js.map