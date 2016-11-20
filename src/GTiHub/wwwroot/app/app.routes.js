"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var client_addedit_component_1 = require("./client/client-addedit.component");
var source_addedit_component_1 = require("./source/source-addedit.component");
var target_addedit_component_1 = require("./target/target-addedit.component");
var map_list_component_1 = require("./map/map-list.component");
var map_runmap_component_1 = require("./map/run-map/map-runmap.component");
var appRoutes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "about", component: about_component_1.AboutComponent },
    { path: "sources", component: source_addedit_component_1.SourceAddEditComponent },
    { path: "targets", component: target_addedit_component_1.TargetAddEditComponent },
    { path: "clients", component: client_addedit_component_1.ClientAddEditComponent },
    { path: "maps", component: map_list_component_1.MapListComponent },
    { path: "run-map", component: map_runmap_component_1.RunMapComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map