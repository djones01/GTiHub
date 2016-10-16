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
var transformation_1 = require('../transformation');
var map_addedit_service_1 = require('../../services/map-addedit.service');
var RuleAddEditComponent = (function () {
    function RuleAddEditComponent(_dataService, modalService, selectService, MapAddEditService) {
        this._dataService = _dataService;
        this.modalService = modalService;
        this.selectService = selectService;
        this.MapAddEditService = MapAddEditService;
        this.rule_Operations = [
            { value: 'sfield', display: 'Source Field(s)' },
            { value: 'assign', display: 'Automatic / System Generated' },
            { value: 'text', display: 'Text' }
        ];
        //If false, show target selection
        this.selectingSource = true;
        this.addEditRule = new transformation_1.Rule('', '', 'text', null, null);
    }
    RuleAddEditComponent.prototype.openSourceSelect = function (content, condition) {
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            //User selected source field in modal
            if (result == 'Select SField') {
            }
        }, function (reason) { });
    };
    RuleAddEditComponent.prototype.ngOnInit = function () {
    };
    RuleAddEditComponent.prototype.ngOnDestroy = function () {
    };
    RuleAddEditComponent = __decorate([
        core_1.Component({
            selector: 'rule-addedit',
            templateUrl: 'app/transformation/rule/rule-addedit.component.html',
            providers: [data_service_1.DataService, source_select_service_1.SFieldSelectService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, ng_bootstrap_1.NgbModal, source_select_service_1.SFieldSelectService, map_addedit_service_1.MapAddEditService])
    ], RuleAddEditComponent);
    return RuleAddEditComponent;
}());
exports.RuleAddEditComponent = RuleAddEditComponent;
//# sourceMappingURL=rule-addedit.component.js.map