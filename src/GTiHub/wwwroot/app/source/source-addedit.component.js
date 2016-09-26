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
var source_1 = require('./source');
var dataService_1 = require('../services/dataService');
var ng2_file_upload_1 = require('ng2-file-upload');
var SourceAddEditComponent = (function () {
    function SourceAddEditComponent(_dataService) {
        this._dataService = _dataService;
        //Control the template / manual header boxes
        this.sopt = true;
        this.sfieldCount = 0;
        this.sources = [];
        this.addEditSource = new source_1.Source('', '', '', true);
        this.uploader = new ng2_file_upload_1.FileUploader({ url: 'api/File/ExtractHeaders' });
        //Reset the form
        this.active = true;
    }
    SourceAddEditComponent.prototype.getSources = function () {
        var _this = this;
        this._dataService.GetAll('Sources').subscribe(function (sources) { return _this.sources = sources; });
    };
    SourceAddEditComponent.prototype.newSource = function () {
        var _this = this;
        this.addEditSource = new source_1.Source('', '', '', true);
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    SourceAddEditComponent.prototype.ngOnInit = function () {
        this.getSources();
    };
    SourceAddEditComponent = __decorate([
        core_1.Component({
            selector: 'source-addedit',
            templateUrl: 'app/source/source-addedit.component.html',
            providers: [dataService_1.DataService],
        }), 
        __metadata('design:paramtypes', [dataService_1.DataService])
    ], SourceAddEditComponent);
    return SourceAddEditComponent;
}());
exports.SourceAddEditComponent = SourceAddEditComponent;
//# sourceMappingURL=source-addedit.component.js.map