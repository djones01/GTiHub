import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'project-addedit',
    providers: [DataService],
    templateUrl: 'app/components/project/project-addedit.component.html'
})
export class ProjectAddEditComponent {
    constructor(private _dataService: DataService) { }


}