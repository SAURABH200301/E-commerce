import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts: any = [];
  totalAmount: number = 0;
  discountAmount: number = 0;
  visible: boolean = false;
  totalQuantity:number=0;
  constructor() {
    console.log(this.addedProducts)
  }

  //will work for both add the extra quantity and add new item
  addTocart(product: any) {
    let found = this.addedProducts.find((ele: any) => ele.id === product.id)
    console.log("found: ", found)
    this.visible=true;
    if (found === undefined) {
      let newProduct = { ...product, quantity: 1 };
      this.totalAmount += newProduct.price;
      this.discountAmount += (newProduct.price) * newProduct.discountPercentage / 100;
      this.addedProducts.push(newProduct);
      this.totalQuantity=1;
    } else {
      found.quantity++;
      this.totalQuantity++;
      this.totalAmount += found.price;
      this.discountAmount += found.price * found.discountPercentage / 100;
    }
    setInterval(()=>{
      this.visible=false;
    },3000);
  }


  decreaseQuantity(id: any) {
    let found = this.addedProducts.find((ele: any) => ele.id === id)
    if (found.quantity == 1) {
      this.removeItemFromCart(id);
      this.totalQuantity--;
    } else {
      found.quantity--;
      this.totalQuantity--;
      this.totalAmount -= found.price;
      this.discountAmount -= found.price * found.discountPercentage / 100;
    }
  }

  removeItemFromCart(id: any) {
    this.totalQuantity--;
    let found = this.addedProducts.find((ele: any) => ele.id === id)
    this.totalAmount -= found.price;
    this.discountAmount -= found.price * found.discountPercentage / 100;
    const arr = this.addedProducts.filter((item: { id: any; }) => item.id !== id)
    this.addedProducts = arr;
  }
}