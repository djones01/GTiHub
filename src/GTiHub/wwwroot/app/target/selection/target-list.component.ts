import { Component, ViewChild, OnInit, Output, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Response, Headers } from '@angular/http';
import { Target } from '../target';
import { TFieldSelectService } from '../../services/target-select.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
    selector: 'target-list',
    templateUrl: 'app/target/selection/target-list.component.html',
    providers: [DataService],
})
export class TargetListComponent implements OnInit, OnDestroy {
    private targets: Target[] = [];
    private selectedTarget: Target;

    selectedSubscription: Subscription;
    targetsSubscription: Subscription;

    onSelectTarget(target: Target) {
        this.selectService.setSelectedTarget(target);
    }

    constructor(private _dataService: DataService, private selectService: TFieldSelectService) {
    }
    ngOnInit(): void {
        this.selectedSubscription = this.selectService.getSelectedTarget().subscribe(selectedTarget => { this.selectedTarget = selectedTarget });
        this.targetsSubscription = this.selectService.getTargets().subscribe(targets => this.targets = targets);
        this.selectService.initTargets();
    }
    ngOnDestroy(): void {
        this.selectedSubscription.unsubscribe();
        this.targetsSubscription.unsubscribe();
    }
}