import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'project-detail',
    providers: [ProjectService],
    templateUrl: 'app/components/project/project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit{
    projects: Object[];

    constructor(private projectService: ProjectService) { }

    getProjects(): void {
        this.projectService.getProjects().subscribe(projects => this.projects = projects);
    }
    ngOnInit(): void {
        this.getProjects();
    }

    projectClicked(project, i): void {
        alert(i);
        alert(project.name);
    }
}