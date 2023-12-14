import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'work-with-us', component: WorkWithUsComponent},
];
