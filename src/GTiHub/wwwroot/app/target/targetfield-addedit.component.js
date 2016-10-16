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
var target_addedit_service_1 = require('../services/target-addedit.service');
var TargetFieldAddEditComponent = (function () {
    function TargetFieldAddEditComponent(_dataService, targetAddEditService) {
        this._dataService = _dataService;
        this.targetAddEditService = targetAddEditService;
        this.targetFields = [];
        this.options = [
            { value: 'url', display: 'URL' },
            { value: 'text', display: 'Text' },
            { value: 'bool', display: 'Boolean' },
            { value: 'decimal', display: 'Decimal' },
            { value: 'currency', display: 'Currency' },
            { value: 'email', display: 'Email' }
        ];
    }
    TargetFieldAddEditComponent.prototype.removeTargetField = function (targetField, i) {
        this.targetAddEditService.removeTargetField(targetField, i);
    };
    TargetFieldAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.targetFieldSubscription = this.targetAddEditService.getTargetFields().subscribe(function (targetFields) { return _this.targetFields = targetFields; });
    };
    TargetFieldAddEditComponent.prototype.ngOnDestroy = function () {
        this.targetFieldSubscription.unsubscribe();
    };
    TargetFieldAddEditComponent = __decorate([
        core_1.Component({
            selector: 'targetfield-addedit',
            templateUrl: 'app/target/targetfield-addedit.component.html',
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, target_addedit_service_1.TargetAddEditService])
    ], TargetFieldAddEditComponent);
    return TargetFieldAddEditComponent;
}());
exports.TargetFieldAddEditComponent = TargetFieldAddEditComponent;
//# sourceMappingURL=targetfield-addedit.component.js.map