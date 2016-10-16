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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_constants_1 = require('./app.constants');
var app_routes_1 = require('./app.routes');
var http_1 = require('@angular/http');
var data_service_1 = require('./services/data.service');
var ng2_pagination_1 = require('ng2-pagination');
var ng2_file_upload_1 = require('ng2-file-upload');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
//Component imports
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var project_detail_component_1 = require('./project/project-detail.component');
var client_addedit_component_1 = require('./client/client-addedit.component');
var source_addedit_component_1 = require('./source/source-addedit.component');
var sourcefield_addedit_component_1 = require('./source/sourcefield-addedit.component');
var source_list_component_1 = require('./source/selection/source-list.component');
var sourcefield_list_component_1 = require('./source/selection/sourcefield-list.component');
var target_addedit_component_1 = require('./target/target-addedit.component');
var targetfield_addedit_component_1 = require('./target/targetfield-addedit.component');
var target_list_component_1 = require('./target/selection/target-list.component');
var targetfield_list_component_1 = require('./target/selection/targetfield-list.component');
var map_addedit_component_1 = require('./map/map-addedit.component');
var transform_addedit_component_1 = require('./transformation/transform-addedit.component');
var condition_addedit_component_1 = require('./transformation/condition/condition-addedit.component');
var rule_addedit_component_1 = require('./transformation/rule/rule-addedit.component');
var rulesourcefield_addedit_component_1 = require('./transformation/rule/rulesourcefield-addedit.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.FormsModule,
                ng2_pagination_1.Ng2PaginationModule,
                ng_bootstrap_1.NgbModule,
                app_routes_1.routing
            ],
            declarations: [app_component_1.AppComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                project_detail_component_1.ProjectDetailComponent,
                client_addedit_component_1.ClientAddEditComponent,
                source_addedit_component_1.SourceAddEditComponent,
                sourcefield_addedit_component_1.SourceFieldAddEditComponent,
                source_list_component_1.SourceListComponent,
                sourcefield_list_component_1.SourceFieldListComponent,
                target_addedit_component_1.TargetAddEditComponent,
                targetfield_addedit_component_1.TargetFieldAddEditComponent,
                target_list_component_1.TargetListComponent,
                targetfield_list_component_1.TargetFieldListComponent,
                map_addedit_component_1.MapAddEditComponent,
                transform_addedit_component_1.TransformAddEditComponent,
                condition_addedit_component_1.ConditionAddEditComponent,
                rule_addedit_component_1.RuleAddEditComponent,
                rulesourcefield_addedit_component_1.RuleSourceFieldAddEditComponent,
                ng2_file_upload_1.FileSelectDirective
            ],
            providers: [
                app_routes_1.appRoutingProviders,
                app_constants_1.Configuration,
                data_service_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map