import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent
    
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];
