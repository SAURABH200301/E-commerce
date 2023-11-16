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
  liked: boolean = false;
  constructor(private route: ActivatedRoute, private service: APISService, private cart: CartService) {

  }
  addCart(id: any) {
    this.cart.addTocart(id);
  }
  getLiked() {
    this.liked = !this.liked
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id')!;
      console.log('Product ID:', this.productId);
      this.service.getSingleProduct(this.productId).subscribe((resp: any) => {
        this.productDetails = resp;
        console.log(resp)
      })
    });

   
  }
}
