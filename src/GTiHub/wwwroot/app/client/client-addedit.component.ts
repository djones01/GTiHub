﻿import { Component, OnInit } from "@angular/core";
import { Client } from "./client";
import { DataService } from "../services/data.service";

@Component({
    selector: "client-addedit",
    templateUrl: "app/client/client-addedit.component.html",
    providers: [DataService]
})
export class ClientAddEditComponent implements OnInit {
    private addEditClient = new Client("", "");
    private clients: Client[] = [];
    private editing = false;
    private editId = -1;

    constructor(private _dataService: DataService) {
    }

    deleteClient(client) {
        this._dataService.Delete("Clients", client.clientId)
            .subscribe(() => {
                    this.removeClient(client);
                },
                error => console.log(error));
    }

    editClient(client) {
        this.addEditClient = client;
        this.editId = this.addEditClient["clientId"];
        this.editing = true;
    }

    onSubmit() {
        if (this.editing) {
            this._dataService.Update("Clients", this.editId, this.addEditClient)
                .subscribe(client => {},
                    error => console.log(error));
        } else {
            this._dataService.Add("Clients", this.addEditClient)
                .subscribe(client => { this.clients.push(client) },
                    error => console.log(error));
        }

        this.newClient();
        this.editing = false;
        return false;
    }

    getClients() {
        this._dataService.GetAll("Clients").subscribe(clients => this.clients = clients);
    }

    //Reset the form
    active = true;

    newClient() {
        this.addEditClient = new Client("", "");
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    removeClient(client) {
        const index = this.clients.indexOf(client);
        this.clients.splice(index, 1);
    }

    ngOnInit(): void {
        this.getClients();
    }
}