import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  quantity:number=0;
  constructor(private cart: CartService){
    this.quantity=this.cart.totalQuantity;
  }
}
