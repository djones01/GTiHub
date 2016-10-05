import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientAddEditComponent } from './client/client-addedit.component';
import { SourceAddEditComponent } from './source/source-addedit.component';
import { MapAddEditComponent } from './map/map-addedit.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'source', component: SourceAddEditComponent },
  { path: 'client', component: ClientAddEditComponent },
  { path: 'map', component: MapAddEditComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);