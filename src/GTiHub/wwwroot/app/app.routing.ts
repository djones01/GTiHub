import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectAddEditComponent } from './components/project/project-addedit.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
        path: 'addProj',
        component: ProjectAddEditComponent,
        data: {
            title: 'Heroes List'
        }
    },
    { path: '', component: AppComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);