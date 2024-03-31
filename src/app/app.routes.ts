import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FamiliesComponent } from './families/families.component';


export const routes: Routes = [  {path:'', component:HelloComponent, pathMatch: 'full'},
{path:'Families', component:FamiliesComponent}];
