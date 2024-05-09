import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FamiliesComponent } from './families/families.component';
import { LoginComponent } from './auth/login.component';
import { familiesGenesComponent } from './families/families-genes.component';


export const routes: Routes = [  
    {path:'', component:HelloComponent, pathMatch: 'full'},
    {path:'Families', component:FamiliesComponent},
    {path : 'FamiliesGenes/:id', component : familiesGenesComponent},
    {path: 'login', component:LoginComponent}
];
