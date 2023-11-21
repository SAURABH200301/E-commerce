import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addedProducts: any = [];
  totalAmount: number = 0;
  discountAmount: number = 0;
  visible: boolean = false;
  totalQuantity: number = 0;
  message: string = "";
  likedImages: any[] = [];

  private SavedEvent = new Subject<any>();

  public eventState$ = this.SavedEvent.asObservable();

  public getSavedItems(state: any) {
    this.SavedEvent.next(state);
  }

  constructor() {
    // console.log(this.addedProducts)
  }

  addLike(liked: any) {
    this.likedImages.push(liked);
    this.getSavedItems(this.likedImages);
    // console.log(this.likedImages)
  }
  removeLike(liked: any) {
    this.likedImages = this.likedImages.filter((like) => like.id !== liked.id)
    this.getSavedItems(this.likedImages);
    // console.log(this.likedImages)
  }

  //will work for both add the extra quantity and add new item
  addTocart(product: any) {
    let found = this.addedProducts.find((ele: any) => ele.id === product.id)
    console.log("found: ", found)
    this.visible = true;
    if (found === undefined) {
      let newProduct = { ...product, quantity: 1 };
      this.totalAmount += newProduct.price;
      this.discountAmount += (newProduct.price) * newProduct.discountPercentage / 100;
      this.addedProducts.push(newProduct);
      this.totalQuantity += 1;
    } else {
      found.quantity++;
      this.totalQuantity++;
      this.totalAmount += found.price;
      this.discountAmount += found.price * found.discountPercentage / 100;
    }
    this.message = "Item is added to the cart"
    setTimeout(() => {
      this.visible = false;
      this.message = "";
    }, 3000);
  }


  decreaseQuantity(id: any) {
    let found = this.addedProducts.find((ele: any) => ele.id === id)
    this.visible = true;
    if (found.quantity == 1) {
      this.removeItemFromCart(id);
    } else {
      this.totalQuantity--;
      found.quantity--;
      this.totalAmount -= found.price;
      this.discountAmount -= found.price * found.discountPercentage / 100;
    }
    this.message = "Item is removed to the cart"
    setTimeout(() => {
      this.visible = false;
      this.message = "";
    }, 3000);
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
