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
var source_addedit_service_1 = require('../services/source-addedit.service');
var SourceFieldAddEditComponent = (function () {
    function SourceFieldAddEditComponent(_dataService, sourceAddEditService) {
        this._dataService = _dataService;
        this.sourceAddEditService = sourceAddEditService;
        this.sourceFields = [];
        this.options = [
            { value: 'url', display: 'URL' },
            { value: 'text', display: 'Text' },
            { value: 'bool', display: 'Boolean' },
            { value: 'decimal', display: 'Decimal' },
            { value: 'currency', display: 'Currency' },
            { value: 'email', display: 'Email' }
        ];
    }
    SourceFieldAddEditComponent.prototype.removeSourceField = function (sourceField, i) {
        this.sourceAddEditService.removeSourceField(sourceField, i);
    };
    SourceFieldAddEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sourceFieldSubscription = this.sourceAddEditService.getSourceFields().subscribe(function (sourceFields) { return _this.sourceFields = sourceFields; });
    };
    SourceFieldAddEditComponent.prototype.ngOnDestroy = function () {
        this.sourceFieldSubscription.unsubscribe();
    };
    SourceFieldAddEditComponent = __decorate([
        core_1.Component({
            selector: 'sourcefield-addedit',
            templateUrl: 'app/source/sourcefield-addedit.component.html',
            providers: [data_service_1.DataService],
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, source_addedit_service_1.SourceAddEditService])
    ], SourceFieldAddEditComponent);
    return SourceFieldAddEditComponent;
}());
exports.SourceFieldAddEditComponent = SourceFieldAddEditComponent;
//# sourceMappingURL=sourcefield-addedit.component.js.map