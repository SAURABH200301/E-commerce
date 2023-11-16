import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any
  liked: boolean = false;
  constructor(private cart: CartService) {
  }
  getLiked(){
    this.liked=!this.liked
  }
  addItem(item: any) {
    this.cart.addTocart(item);
    console.log("item added", this.cart.addedProducts)
  }
}
