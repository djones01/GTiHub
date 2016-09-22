import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing, appRoutingProviders } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataService } from './services/dataService';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectDetailComponent } from './project/project-detail.component';
import { ClientAddEditComponent } from './client/client-addedit.component';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule,
        FormsModule
    ],

    declarations: [AppComponent,
        HomeComponent,
        AboutComponent,
        ProjectDetailComponent,
        ClientAddEditComponent
    ],

    providers: [
        appRoutingProviders,
        Configuration,
        DataService
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }