import { Component } from '@angular/core';
import { APISService } from 'src/app/services/apis.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  search: string = ""
  constructor(public cart: CartService, public service: APISService) {
    console.log(this.service.getItemsBySearch(this.search))
  }
  searchProd(word: string) {
    this.service.getItemsBySearch(word);
  }
}
