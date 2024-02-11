import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class Carousel {
  imgArray: Array<number | undefined> = [-2, -1, 0, 1, 2];
  counter = this.imgArray[2];
  popped?: number;
  shifted? : number;
  storePopped?: number;
  
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
