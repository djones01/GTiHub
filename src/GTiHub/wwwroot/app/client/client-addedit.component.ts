import { Component, OnInit } from '@angular/core';
import { Client } from './client';
import { DataService } from '../services/dataService';

@Component({
    selector: 'client-addedit',
    templateUrl: 'app/client/client-addedit.component.html',
    providers: [DataService]
})
export class ClientAddEditComponent implements OnInit {
    private addEditClient: Client = new Client('', '');
    private clients: Client[] = [];

    constructor(private _dataService: DataService) {
    }

    onSubmit() {
        this._dataService.Add('Clients/', this.addEditClient).subscribe(client => { this.clients.push(client) });
        return false;
    }

    getClients() {
        this._dataService.GetAll('Clients/').subscribe(clients => this.clients = clients);
    }

    //Reset the form
    active = true;

    newClient() {
        this.addEditClient = new Client('', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnInit(): void {
        this.getClients();
    }
}