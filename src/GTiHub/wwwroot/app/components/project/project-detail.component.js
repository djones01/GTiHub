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
var project_service_1 = require('../../services/project.service');
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectDetailComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectDetailComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectDetailComponent.prototype.projectClicked = function (project, i) {
        alert(i);
        alert(project.name);
    };
    ProjectDetailComponent = __decorate([
        core_1.Component({
            selector: 'project-detail',
            providers: [project_service_1.ProjectService],
            templateUrl: 'app/components/project/project-detail.component.html'
        }), 
        __metadata('design:paramtypes', [project_service_1.ProjectService])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());
exports.ProjectDetailComponent = ProjectDetailComponent;
//# sourceMappingURL=project-detail.component.js.map