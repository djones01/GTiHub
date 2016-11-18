import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing, appRoutingProviders } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

//Component imports
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project/project-detail.component';
import { ClientAddEditComponent } from './client/client-addedit.component';
import { SourceAddEditComponent } from './source/source-addedit.component';
import { SourceFieldAddEditComponent } from './source/sourcefield-addedit.component';
import { SourceListComponent } from './source/selection/source-list.component';
import { SourceFieldListComponent } from './source/selection/sourcefield-list.component';
import { TargetAddEditComponent } from './target/target-addedit.component';
import { TargetFieldAddEditComponent } from './target/targetfield-addedit.component';
import { TargetListComponent } from './target/selection/target-list.component';
import { TargetFieldListComponent } from './target/selection/targetfield-list.component';
import { MapAddEditComponent } from './map/map-addedit.component';
import { MapListComponent } from './map/map-list.component';
import { RunMapComponent } from './map/run-map/map-runmap.component';
import { MapFileSelectComponent } from './map/run-map/map-fileselect.component';
import { TransformAddEditComponent } from './transformation/transform-addedit.component';
import { ConditionAddEditComponent } from './transformation/condition/condition-addedit.component';
import { RuleAddEditComponent } from './transformation/rule/rule-addedit.component';
import { RuleSourceFieldAddEditComponent } from './transformation/rule/rulesourcefield-addedit.component';
import { FieldFormatComponent } from './transformation/rule/field-format.component';
import { DateFormatComponent } from './transformation/rule/date-format.component';

//Pipes
import { ExtractFileNamePipe } from './pipes/extract-file-name.pipe';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        Ng2PaginationModule,
        Ng2DatetimePickerModule,
        NgbModule.forRoot(),
        routing
    ],

    declarations: [AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectDetailComponent,
        ClientAddEditComponent,
        SourceAddEditComponent,
        SourceFieldAddEditComponent,
        SourceListComponent,
        SourceFieldListComponent,  
        TargetAddEditComponent,
        TargetFieldAddEditComponent,
        TargetListComponent,
        TargetFieldListComponent,     
        MapAddEditComponent,
        MapListComponent,
        RunMapComponent,
        MapFileSelectComponent,
        TransformAddEditComponent,
        ConditionAddEditComponent,
        RuleAddEditComponent,
        RuleSourceFieldAddEditComponent,
        FieldFormatComponent,
        DateFormatComponent,
        FileSelectDirective,
        ExtractFileNamePipe
    ],

    providers: [
        appRoutingProviders,
        Configuration,
        DataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }