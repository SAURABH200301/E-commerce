import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-saved-item',
  templateUrl: './saved-item.component.html',
  styleUrls: ['./saved-item.component.css']
})
export class SavedItemComponent implements OnInit {

  liked: boolean = true;
  constructor(public cart: CartService) {
    // console.log(this.cart.likedImages);
  }
  ngOnInit(): void {
    this.cart.eventState$.subscribe(state => {

    })
  }
  getLiked(prod: any) {
    this.liked = !this.liked;
    if (this.liked) {
      this.cart.addLike(prod);
    } else {
      this.cart.removeLike(prod);
      this.cart.likedImages.filter((item) => item.id !== prod.id)
    }
  }

}
