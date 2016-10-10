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
var transformation_1 = require('../transformation');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var source_select_service_1 = require('../../services/source-select.service');
var ConditionAddEditComponent = (function () {
    function ConditionAddEditComponent(_dataService, modalService, selectService) {
        this._dataService = _dataService;
        this.modalService = modalService;
        this.selectService = selectService;
        this.active = true;
        this.condSeqCount = 1;
        this.hasSelectedSourceField = false;
        //List of Conditions currently in the add/edit list
        this.conditions = [];
    }
    ConditionAddEditComponent.prototype.openSourceSelect = function (content, condition) {
        var _this = this;
        this.selectingCondition = condition;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
            //User selected source field in modal
            if (result == 'Select SField') {
                _this.selectingCondition.sourceField = _this.selectedSourceField;
                _this.selectingCondition = null;
            }
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConditionAddEditComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    //Add a new condition to the list of conditions
    ConditionAddEditComponent.prototype.addCondition = function () {
        this.conditions.push(new transformation_1.Condition(this.condSeqCount++, (this.condSeqCount == 1) ? '' : 'or', '', '', '', '', null));
    };
    ConditionAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField().subscribe(function (hasSelectedSourceField) { return _this.hasSelectedSourceField = hasSelectedSourceField; });
        this.getSelectedSubscription = this.selectService.getSelectedSourceField().subscribe(function (selectedSourceField) { return _this.selectedSourceField = selectedSourceField; });
    };
    ConditionAddEditComponent.prototype.ngOnDestroy = function () {
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
    };
    ConditionAddEditComponent = __decorate([
        core_1.Component({
            selector: 'condition-addedit',
            templateUrl: 'app/transformation/condition/condition-addedit.component.html',
            providers: [dataService_1.DataService, source_select_service_1.SFieldSelectService]
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService, ng_bootstrap_1.NgbModal, source_select_service_1.SFieldSelectService])
    ], ConditionAddEditComponent);
    return ConditionAddEditComponent;
}());
exports.ConditionAddEditComponent = ConditionAddEditComponent;
//# sourceMappingURL=condition-addedit.component.js.map