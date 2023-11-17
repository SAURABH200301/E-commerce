import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product:any;
  totalAmount:number=0;
  discount:number=0;
  payableAmount:number=0;
  totalQuantity:number=0;
  constructor(private cart: CartService){
    this.getData();
    this.totalQuantity=this.cart.totalQuantity;
    // console.log(this.cart.addedProducts)
  }
  getData(){
    this.product=this.cart.addedProducts;
    this.totalAmount=this.cart.totalAmount;
    this.discount=this.cart.discountAmount
    this.payableAmount=this.totalAmount-this.discount
  }
  decItem(id:any){
    this.cart.decreaseQuantity(id);
    this.totalQuantity=this.cart.totalQuantity;
    this.getData();
  }
  incItem(item:any){
    this.cart.addTocart(item);
    this.totalQuantity=this.cart.totalQuantity;
    this.getData();
  }
}
