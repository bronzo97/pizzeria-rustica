import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsonData from './menu.json';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menu: any[] = jsonData.menu;
}
