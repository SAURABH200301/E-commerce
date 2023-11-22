import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any
  liked: boolean = false;
  constructor(private cart: CartService) {
    

  }
  ngOnInit(): void {
    if(this.cart.likedImages.find((item)=>item.id===this.product.id)){
      this.liked=true
    }
  }
  getLiked(prod:any){
    this.liked=!this.liked;
    if(this.liked){
      this.cart.addLike(prod);
    }else{
      this.cart.removeLike(prod);
    }
  }
  addItem(item: any) {
    this.cart.addTocart(item);
    // console.log("item added", this.cart.addedProducts)
  }
}
