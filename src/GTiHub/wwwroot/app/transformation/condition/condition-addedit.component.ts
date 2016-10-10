import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/dataService';
import { Response, Headers } from '@angular/http';
import { Condition } from '../transformation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SourceFieldListComponent } from '../../source/selection/sourcefield-list.component';
import { SourceListComponent } from '../../source/selection/source-list.component';
import { SFieldSelectService } from '../../services/source-select.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'condition-addedit',
    templateUrl: 'app/transformation/condition/condition-addedit.component.html',
    providers: [DataService, SFieldSelectService]
})
export class ConditionAddEditComponent implements OnInit, OnDestroy {
    active: boolean = true;
    condSeqCount = 1;
    selectingCondition: Condition;
    hasSelectedSourceField: boolean = false;
    selectedSourceField: any;

    hasSelectedSubscription: Subscription;
    getSelectedSubscription: Subscription;

    //List of Conditions currently in the add/edit list
    public conditions: Condition[] = [];

    //Modal Functions
    closeResult: string;
    openSourceSelect(content, condition) {
        this.selectingCondition = condition;
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            //User selected source field in modal
            if (result == 'Select SField') {
                this.selectingCondition.sourceField = this.selectedSourceField;
                this.selectingCondition = null;
            }
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    //Add a new condition to the list of conditions
    addCondition() {
        this.conditions.push(new Condition(this.condSeqCount++, (this.condSeqCount == 1) ? '' : 'or', '', '', '', '', null));
    }

    constructor(private _dataService: DataService, private modalService: NgbModal, private selectService: SFieldSelectService) {}
    ngOnInit(): void {
        this.hasSelectedSubscription = this.selectService.hasSelectedSourceField().subscribe(hasSelectedSourceField => this.hasSelectedSourceField = hasSelectedSourceField);
        this.getSelectedSubscription = this.selectService.getSelectedSourceField().subscribe(selectedSourceField => this.selectedSourceField = selectedSourceField);
    }
    ngOnDestroy(): void {
        this.hasSelectedSubscription.unsubscribe();
        this.getSelectedSubscription.unsubscribe();
    }
}