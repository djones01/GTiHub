import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing, appRoutingProviders } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataService } from './services/dataService';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project/project-detail.component';
import { ClientAddEditComponent } from './client/client-addedit.component';
import { SourceAddEditComponent } from './source/source-addedit.component';
import { MapAddEditComponent } from './map/map-addedit.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        FormsModule,
        Ng2PaginationModule,
        routing
    ],

    declarations: [AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectDetailComponent,
        SourceAddEditComponent,
        ClientAddEditComponent,
        MapAddEditComponent,
        FileSelectDirective
    ],

    providers: [
        appRoutingProviders,
        Configuration,
        DataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }