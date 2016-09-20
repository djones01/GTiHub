import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
    selector: 'project-addedit',
    providers: [ProjectService],
    templateUrl: 'app/components/project/project-addedit.component.html'
})
export class ProjectAddEditComponent {
    constructor(private projectService: ProjectService) { }


}