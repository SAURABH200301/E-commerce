import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { APISService } from 'src/app/services/apis.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: string = ""
  productDetails: any = []
  liked: boolean = true;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id')!;
      this.service.getSingleProduct(this.productId).subscribe((resp: any) => {
        this.productDetails = resp;
      })
      if (this.cart.likedImages.find((item) => item.id === Number(this.productId))) {
        // console.log(this.productId)
        this.liked = true;
      } else {
        this.liked = false
      }
    });
  }

  constructor(private route: ActivatedRoute, private service: APISService, private cart: CartService) {
    
  }

  addCart(id: any) {
    this.cart.addTocart(id);
  }
  getLiked(prod: any) {
    this.liked = !this.liked;
    if (this.liked) {
      this.cart.addLike(prod);
    } else {
      this.cart.removeLike(prod);
    }
  }
}
