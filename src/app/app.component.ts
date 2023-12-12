import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar.component';
import { Footer } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, Navbar, Footer, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pizzeria-rustica';
}
