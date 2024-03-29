import {Routes} from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './src/app/home/home.component';
import { WorkWithUsComponent } from './src/app/work-with-us/work-with-us.component';
import { MenuComponent } from './src/app/menu/menu.component';
import { ContactsComponent } from './src/app/contacts/contacts.component';

export const routes = [] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: '/assets/menu.pdf',
        redirectTo: './assets/menu.pdf'
    },
    {
        path: '/contacts',
        component: ContactsComponent
    },
    {
        path: '/work-with-us',
        component: WorkWithUsComponent
    },
];



