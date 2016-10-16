"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var client_addedit_component_1 = require('./client/client-addedit.component');
var source_addedit_component_1 = require('./source/source-addedit.component');
var target_addedit_component_1 = require('./target/target-addedit.component');
var map_addedit_component_1 = require('./map/map-addedit.component');
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'source', component: source_addedit_component_1.SourceAddEditComponent },
    { path: 'target', component: target_addedit_component_1.TargetAddEditComponent },
    { path: 'client', component: client_addedit_component_1.ClientAddEditComponent },
    { path: 'map', component: map_addedit_component_1.MapAddEditComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map