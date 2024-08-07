import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent,
      },

      {
        path: 'media',
        component: MediaComponent,
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
