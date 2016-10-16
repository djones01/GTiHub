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
var TargetListComponent = (function () {
    function TargetListComponent(_dataService, selectService) {
        this._dataService = _dataService;
        this.selectService = selectService;
        this.targets = [];
    }
    TargetListComponent.prototype.onSelectTarget = function (target) {
        this.selectService.setSelectedTarget(target);
    };
    TargetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedSubscription = this.selectService.getSelectedTarget().subscribe(function (selectedTarget) { _this.selectedTarget = selectedTarget; });
        this.targetsSubscription = this.selectService.getTargets().subscribe(function (targets) { return _this.targets = targets; });
        this.selectService.initTargets();
    };
    TargetListComponent.prototype.ngOnDestroy = function () {
        this.selectedSubscription.unsubscribe();
        this.targetsSubscription.unsubscribe();
    };
    TargetListComponent = __decorate([
        core_1.Component({
            selector: 'target-list',
            templateUrl: 'app/target/selection/target-list.component.html',
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, target_select_service_1.TFieldSelectService])
    ], TargetListComponent);
    return TargetListComponent;
}());
exports.TargetListComponent = TargetListComponent;
//# sourceMappingURL=target-list.component.js.map