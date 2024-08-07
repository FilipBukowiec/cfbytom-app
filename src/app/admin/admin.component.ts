import { Component } from '@angular/core';
import { MenuAdminComponent } from '../menu-admin/menu-admin.component';
import { RouterModule, } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, MenuAdminComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
