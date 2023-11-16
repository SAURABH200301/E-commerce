import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating: any
  fullstar: number = 0;
  halfStar: number = 0;
  emptyStar: number = 0;

  ngOnChanges() {
    this.fullstar = Math.floor(Number(this.rating));
    this.halfStar = (this.rating - (this.fullstar)) !== 0 ? 1 : 0;
    this.emptyStar = 5 - (this.fullstar + this.halfStar);
  }
}
