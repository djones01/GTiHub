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
var RuleSourceFieldAddEditComponent = (function () {
    function RuleSourceFieldAddEditComponent(_dataService, modalService, selectService, MapAddEditService) {
        this._dataService = _dataService;
        this.modalService = modalService;
        this.selectService = selectService;
        this.MapAddEditService = MapAddEditService;
        this.ruleSourceFields = [];
        this.seqNum = 1;
        this.hasSelectedSourceField = false;
    }
    RuleSourceFieldAddEditComponent.prototype.openSourceSelect = function (content, ruleSourceField) {
        var _this = this;
        this.selectingRuleSourceField = ruleSourceField;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            //User selected source field in modal
            if (result == 'Select SField') {
                _this.selectingRuleSourceField.sourceField = _this.selectedSourceField;
            }
        }, function (reason) { });
    };
    RuleSourceFieldAddEditComponent.prototype.addRuleSourceField = function () {
        this.MapAddEditService.addRuleSourceField();
    };
    RuleSourceFieldAddEditComponent.prototype.removeRuleSourceField = function (ruleSourceField) {
        this.MapAddEditService.removeRuleSourceField(ruleSourceField);
    };
    RuleSourceFieldAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Modal subscriptions
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField().subscribe(function (hasSelectedSourceField) { return _this.hasSelectedSourceField = hasSelectedSourceField; });
        this.getSelectedSubscription = this.selectService.getSelectedSourceField().subscribe(function (selectedSourceField) { return _this.selectedSourceField = selectedSourceField; });
        //Map creation subscriptions
        this.getRuleSourceSubscription = this.MapAddEditService.getRuleSourceFields().subscribe(function (ruleSourceFields) { return _this.ruleSourceFields = ruleSourceFields; });
    };
    RuleSourceFieldAddEditComponent.prototype.ngOnDestroy = function () {
        //Modal subscriptions
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
        //Map creation subscriptions
        this.getRuleSourceSubscription.unsubscribe();
    };
    RuleSourceFieldAddEditComponent = __decorate([
        core_1.Component({
            selector: 'rulesourcefield-addedit',
            templateUrl: 'app/transformation/rule/rulesourcefield-addedit.component.html',
            providers: [data_service_1.DataService, source_select_service_1.SFieldSelectService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, ng_bootstrap_1.NgbModal, source_select_service_1.SFieldSelectService, map_addedit_service_1.MapAddEditService])
    ], RuleSourceFieldAddEditComponent);
    return RuleSourceFieldAddEditComponent;
}());
exports.RuleSourceFieldAddEditComponent = RuleSourceFieldAddEditComponent;
//# sourceMappingURL=rulesourcefield-addedit.component.js.map