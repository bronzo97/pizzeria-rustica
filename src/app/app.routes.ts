import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'assets/menu.pdf', redirectTo: './assets/menu.pdf'},
    {path: 'contacts', component: ContactsComponent},
    {path: 'work-with-us', component: WorkWithUsComponent},
];
