import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  toastVisible: boolean = false;
  constructor(private cart: CartService) {
    this.toastVisible=this.cart.visible
  }
}
