import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
  })

export class Carousel {
  
  imgArray: Array<string | undefined> = ["pizza1.jpeg", "pizza2.jpeg","pizza3.jpeg","pizza4.jpeg", "pizza5.jpeg"];
  dragging:string = '';
  smoothMovement:string = 'smooth-movement';
  // cardPerView = Math.round(this.carousel.nativeElement.offsetWidth / this.img.nativeElement.offsetWidth);
  


  @ViewChild('carousel') carousel!: ElementRef;
  private isDragging = false;
  private startX = 0;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.smoothMovement = '';
    this.dragging = 'dragging';
    this.isDragging = true;
    this.startX = event.clientX;
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.dragging = '';
    this.isDragging = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }

    const deltaX = event.clientX - this.startX;
    this.carousel.nativeElement.scrollLeft -= deltaX;
    this.startX = event.clientX;
    this.dragging = 'dragging';
  }

  @ViewChild('img') img!: ElementRef;


  right() {
    this.carousel.nativeElement.scrollLeft += this.img.nativeElement.offsetWidth;
    this.dragging = '';
    this.smoothMovement = 'smooth-movement';
    console.log('right');
    
  }

  left() {
    this.carousel.nativeElement.scrollLeft -= this.img.nativeElement.offsetWidth;
    this.dragging = '';
    this.smoothMovement = 'smooth-movement';
    console.log('left');
  }
} 