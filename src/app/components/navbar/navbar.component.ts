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
    // console.log(this.service.getItemsBySearch(this.search))
  }
  searchProd(key: any) {
    // console.log(key)
    if (this.isLetter(key.key)) {
      this.search += key.key;
      this.service.getItemsBySearch(this.search);
    } else if (key.key === "Backspace") {
      this.search = this.search.slice(0, -1);
      this.service.getItemsBySearch(this.search);
    }
    // console.log(this.search)


  }
  private isLetter(key: string): boolean {
    return /^[a-zA-Z]$/.test(key);
  }
}
