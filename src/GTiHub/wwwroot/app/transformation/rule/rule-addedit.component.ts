import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response, Headers } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SourceFieldListComponent } from '../../source/selection/sourcefield-list.component';
import { SourceListComponent } from '../../source/selection/source-list.component';
import { SFieldSelectService } from '../../services/source-select.service';
import { Subscription }   from 'rxjs/Subscription';
import { Rule } from '../transformation';
import { MapAddEditService } from '../../services/map-addedit.service';

@Component({
    selector: 'rule-addedit',
    templateUrl: 'app/transformation/rule/rule-addedit.component.html',
    providers: [DataService, SFieldSelectService]
})
export class RuleAddEditComponent implements OnInit, OnDestroy {
    hasSelectedTargetField: boolean;
    rule_Operations = [
        { value: 'sfield', display: 'Source Field(s)' },
        { value: 'assign', display: 'Automatic / System Generated' },
        { value: 'text', display: 'Text' }
    ];
    addEditRule: Rule; 
    //If false, show target selection
    selectingSource: boolean = true;


    //Modal Functions
    closeResult: string;
    openSourceSelect(content, condition) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            //User selected source field in modal
            if (result == 'Select SField') {
                
            }
        }, (reason) => {});
    }

    constructor(private _dataService: DataService, private modalService: NgbModal, private selectService: SFieldSelectService, private MapAddEditService: MapAddEditService) {
        this.addEditRule = new Rule('', '', 'text', null, null);
    }
    ngOnInit(): void {
        
    }
    ngOnDestroy(): void {
   
    }
}