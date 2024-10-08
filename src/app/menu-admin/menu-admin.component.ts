import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent } from '../news/news.component';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss',
})
export class MenuAdminComponent {}
