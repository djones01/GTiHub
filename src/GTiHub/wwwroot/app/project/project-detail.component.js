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
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(_dataService) {
        this._dataService = _dataService;
        this.projects = [];
    }
    ProjectDetailComponent.prototype.getProjects = function () {
        var _this = this;
        this._dataService.GetAll("Projects").subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: "project-detail",
            templateUrl: "app/project/project-detail.component.html",
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map