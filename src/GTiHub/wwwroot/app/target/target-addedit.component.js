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
var data_service_1 = require("../services/data.service");
var target_addedit_service_1 = require("../services/target-addedit.service");
var target_select_service_1 = require("../services/target-select.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ng2_file_upload_1 = require("ng2-file-upload");
var TargetAddEditComponent = (function () {
    function TargetAddEditComponent(_dataService, modalService, targetAddEditService, selectService) {
        var _this = this;
        this._dataService = _dataService;
        this.modalService = modalService;
        this.targetAddEditService = targetAddEditService;
        this.selectService = selectService;
        //Control the template / manual header boxes
        this.sopt = true;
        //Reset the form
        this.active = true;
        //Used for editing target
        this.editing = false;
        this.editId = -1;
        this.tfieldCount = 0;
        this.hasTargetFields = false;
        this.hasSelectedTarget = true;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: "api/File/ExtractHeaders" });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            _this.targetAddEditService.setTargetFields(res);
        };
    }
    TargetAddEditComponent.prototype.onFieldCountChange = function () {
        this.targetAddEditService.modifyTFields(this.tfieldCount);
    };
    TargetAddEditComponent.prototype.onSubmit = function () {
        this.targetAddEditService.createOrUpdateTarget();
        //Refresh targets in modal
        this.selectService.initTargets();
        this.newTarget();
    };
    TargetAddEditComponent.prototype.extractFile = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append("delimiter", _this.delimiter);
        };
        this.uploader.uploadAll();
        this.delimiter = "";
    };
    TargetAddEditComponent.prototype.newTarget = function () {
        var _this = this;
        this.targetAddEditService.clear();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    //Modal Functions
    TargetAddEditComponent.prototype.openTargetSelect = function (content) {
        var _this = this;
        this.modalService.open(content, { size: "lg" })
            .result.then(function (result) {
            //User selected target field in modal
            if (result == "Select Target") {
                _this.selectService.getSelectedTarget().subscribe(function (target) { return _this.target = target; });
                _this._dataService.GetAllWithId("Targets/GetTargetFieldsByTarget", _this.target["targetId"])
                    .subscribe(function (targetFields) {
                    _this.targetAddEditService.setTargetFields(targetFields);
                });
            }
        }, function (reason) { });
    };
    TargetAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.targetSubscription = this.targetAddEditService.getTarget().subscribe(function (target) { return _this.target = target; });
        this.hasTargetFieldsSubscription = this.targetAddEditService.hasTargetFields()
            .subscribe(function (hasTargetFields) { return _this.hasTargetFields = hasTargetFields; });
        this.hasSelectedTargetSubscription = this.selectService.hasSelectedTarget()
            .subscribe(function (hasSelectedTarget) { return _this.hasSelectedTarget = hasSelectedTarget; });
    };
    TargetAddEditComponent.prototype.ngOnDestroy = function () {
        this.targetSubscription.unsubscribe();
        this.hasTargetFieldsSubscription.unsubscribe();
        this.hasSelectedTargetSubscription.unsubscribe();
    };
    TargetAddEditComponent = __decorate([
        core_1.Component({
            selector: "target-addedit",
            templateUrl: "app/target/target-addedit.component.html",
            providers: [data_service_1.DataService, target_addedit_service_1.TargetAddEditService, target_select_service_1.TFieldSelectService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, ng_bootstrap_1.NgbModal, target_addedit_service_1.TargetAddEditService, target_select_service_1.TFieldSelectService])
    ], TargetAddEditComponent);
    return TargetAddEditComponent;
}());
exports.TargetAddEditComponent = TargetAddEditComponent;
//# sourceMappingURL=target-addedit.component.js.map