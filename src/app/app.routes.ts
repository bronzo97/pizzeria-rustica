import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'work-with-us', component: WorkWithUsComponent},
];
