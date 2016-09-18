import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { SourceComponent } from './components/source/source.component';
import { ProjectDetailComponent } from './components/project/project-detail.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, SourceComponent, ProjectDetailComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }