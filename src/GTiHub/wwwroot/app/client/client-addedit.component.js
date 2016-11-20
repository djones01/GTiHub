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
var client_1 = require("./client");
var data_service_1 = require("../services/data.service");
var ClientAddEditComponent = (function () {
    function ClientAddEditComponent(_dataService) {
        this._dataService = _dataService;
        this.addEditClient = new client_1.Client("", "");
        this.clients = [];
        this.editing = false;
        this.editId = -1;
        //Reset the form
        this.active = true;
    }
    ClientAddEditComponent.prototype.deleteClient = function (client) {
        var _this = this;
        this._dataService.Delete("Clients", client.clientId)
            .subscribe(function () {
            _this.removeClient(client);
        }, function (error) { return console.log(error); });
    };
    ClientAddEditComponent.prototype.editClient = function (client) {
        this.addEditClient = client;
        this.editId = this.addEditClient["clientId"];
        this.editing = true;
    };
    ClientAddEditComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.editing) {
            this._dataService.Update("Clients", this.editId, this.addEditClient)
                .subscribe(function (client) { }, function (error) { return console.log(error); });
        }
        else {
            this._dataService.Add("Clients", this.addEditClient)
                .subscribe(function (client) { _this.clients.push(client); }, function (error) { return console.log(error); });
        }
        this.newClient();
        this.editing = false;
        return false;
    };
    ClientAddEditComponent.prototype.getClients = function () {
        var _this = this;
        this._dataService.GetAll("Clients").subscribe(function (clients) { return _this.clients = clients; });
    };
    ClientAddEditComponent.prototype.newClient = function () {
        var _this = this;
        this.addEditClient = new client_1.Client("", "");
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    ClientAddEditComponent.prototype.removeClient = function (client) {
        var index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
    };
    ClientAddEditComponent.prototype.ngOnInit = function () {
        this.getClients();
    };
    ClientAddEditComponent = __decorate([
        core_1.Component({
            selector: "client-addedit",
            templateUrl: "app/client/client-addedit.component.html",
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], ClientAddEditComponent);
    return ClientAddEditComponent;
}());
exports.ClientAddEditComponent = ClientAddEditComponent;
//# sourceMappingURL=client-addedit.component.js.map