import { Component } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  products: any = [];
  category: string = "";

  constructor(private service: APISService, private cart: CartService) {
    service.getAllProduct().subscribe((resp: any) => {
      this.products = resp.products;
    });
  
  }
  onCategoryChange($event: any) {
    this.category = $event;
    console.log($event)
    if ($event === "") {
      this.service.getAllProduct().subscribe((resp: any) => {
        this.products = resp.products;
      });
    } else {
      this.service.getProductByCategory($event).subscribe((resp: any) => {
        this.products = resp.products
      })
    }
  }
}
