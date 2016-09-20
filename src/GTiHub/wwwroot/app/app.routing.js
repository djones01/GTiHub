"use strict";
var router_1 = require('@angular/router');
var project_addedit_component_1 = require('./components/project/project-addedit.component');
var app_component_1 = require('./app.component');
var appRoutes = [
    {
        path: 'addProj',
        component: project_addedit_component_1.ProjectAddEditComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: '', component: app_component_1.AppComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map