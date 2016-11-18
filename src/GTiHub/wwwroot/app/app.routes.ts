import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ClientAddEditComponent } from './client/client-addedit.component';
import { SourceAddEditComponent } from './source/source-addedit.component';
import { TargetAddEditComponent } from './target/target-addedit.component';
import { MapListComponent } from './map/map-list.component';
import { RunMapComponent } from './map/run-map/map-runmap.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sources', component: SourceAddEditComponent },
  { path: 'targets', component: TargetAddEditComponent },
  { path: 'clients', component: ClientAddEditComponent },
  { path: 'maps', component: MapListComponent },
  { path: 'run-map', component: RunMapComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);