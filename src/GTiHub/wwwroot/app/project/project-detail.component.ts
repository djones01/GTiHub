import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector: 'project-detail',
    templateUrl: 'app/project/project-detail.component.html',
    providers: [DataService]
})
export class ProjectDetailComponent implements OnInit{
    projects: Object[] = [];

    constructor(private _dataService: DataService) {
    }

    getProjects(): void {
        this._dataService.GetAll('Projects').subscribe(projects => this.projects = projects);
    }
    ngOnInit(): void {
        this.getProjects();
    }
}