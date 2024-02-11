import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class Carousel {
  imgArray: Array<string | undefined> = ["pizza1.jpeg", "pizza2.jpeg","pizza3.jpeg","pizza4.jpeg", "pizza5.jpeg"];
  counter = this.imgArray[2];
  popped?: string;
  shifted? : string;
  storePopped?: string;
  
  previous() {
    this.shifted = this.imgArray.shift();
    this.storePopped = this.shifted;
    console.log(this.storePopped);
    this.imgArray.push(this.storePopped);
  };

  next() {
    this.popped = this.imgArray.pop();
    this.storePopped = this.popped;
    console.log(this.storePopped);
    this.imgArray.unshift(this.storePopped);
  };

}
