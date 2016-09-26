import { Component, OnInit } from '@angular/core';
import { SourceField } from './source';

@Component({
    selector: 'sourcefield-list',
    templateUrl: 'app/source/sourcefield.list.component.html'
})
export class SourceFieldListComponent {

    private sourceFields: SourceField[] = [];
}
