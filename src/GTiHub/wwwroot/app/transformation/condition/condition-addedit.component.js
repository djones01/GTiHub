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
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var source_select_service_1 = require('../../services/source-select.service');
var map_addedit_service_1 = require('../../services/map-addedit.service');
var ConditionAddEditComponent = (function () {
    function ConditionAddEditComponent(_dataService, modalService, selectService, mapAddEditService) {
        this._dataService = _dataService;
        this.modalService = modalService;
        this.selectService = selectService;
        this.mapAddEditService = mapAddEditService;
        this.active = true;
        this.hasSelectedSourceField = false;
        //List of Conditions currently in the add/edit list
        this.conditions = [];
        //Options for operator selection
        this.dateNumOpts = [
            { value: '==', display: 'equals' },
            { value: '!=', display: 'not equal' },
            { value: '<', display: 'less than' },
            { value: '<=', display: 'less than or equal' },
            { value: '>', display: 'greater than' },
            { value: '>=', display: 'greater than or equal' },
        ];
        this.textOpts = [
            { value: '==', display: 'equals' },
            { value: '!=', display: 'not equal' }
        ];
        this.boolOpts = [
            { value: '==', display: 'equals' },
            { value: '!=', display: 'not equal' }
        ];
    }
    //Modal Functions
    ConditionAddEditComponent.prototype.openSourceSelect = function (content, condition) {
        var _this = this;
        this.selectingCondition = condition;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            //User selected source field in modal
            if (result == 'Select SField') {
                _this.selectingCondition.sourceField = _this.selectedSourceField;
                _this.selectingCondition = null;
            }
        }, function (reason) { });
    };
    ConditionAddEditComponent.prototype.removeCondition = function (condition) {
        this.mapAddEditService.removeCondition(condition);
    };
    //Add a new condition to the list of conditions
    ConditionAddEditComponent.prototype.addCondition = function () {
        this.mapAddEditService.addCondition();
    };
    ConditionAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Modal subscriptions
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField().subscribe(function (hasSelectedSourceField) { return _this.hasSelectedSourceField = hasSelectedSourceField; });
        this.getSelectedSubscription = this.selectService.getSelectedSourceField().subscribe(function (selectedSourceField) { return _this.selectedSourceField = selectedSourceField; });
        //Map create subscriptions
        this.getConditionsSubscription = this.mapAddEditService.getConditions().subscribe(function (conditions) { return _this.conditions = conditions; });
    };
    ConditionAddEditComponent.prototype.ngOnDestroy = function () {
        //Modal subscriptions
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
        //Map create subscriptions
        this.getConditionsSubscription.unsubscribe();
    };
    ConditionAddEditComponent = __decorate([
        core_1.Component({
            selector: 'condition-addedit',
            templateUrl: 'app/transformation/condition/condition-addedit.component.html',
            providers: [data_service_1.DataService, source_select_service_1.SFieldSelectService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, ng_bootstrap_1.NgbModal, source_select_service_1.SFieldSelectService, map_addedit_service_1.MapAddEditService])
    ], ConditionAddEditComponent);
    return ConditionAddEditComponent;
}());
exports.ConditionAddEditComponent = ConditionAddEditComponent;
//# sourceMappingURL=condition-addedit.component.js.map