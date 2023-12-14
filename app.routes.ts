import {Routes} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './src/app/home/home.component';
import { WorkWithUsComponent } from './src/app/work-with-us/work-with-us.component';

export const routes = [] = [
    {
        path: '/home',
        component: HomeComponent
    },
    {
        path: '/work-with-us',
        component: WorkWithUsComponent
    },
];



