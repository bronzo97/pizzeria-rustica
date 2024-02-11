import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Carousel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
