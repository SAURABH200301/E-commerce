import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { data } from 'src/app/data';

@Component({
  selector: 'app-saved-item',
  templateUrl: './saved-item.component.html',
  styleUrls: ['./saved-item.component.css']
})
export class SavedItemComponent {
  products:any[]=[];
  constructor(private cart: CartService){
    console.log(this.cart.likedImages);
    this.cart.eventState$.subscribe(state=>{
      this.products=state
      console.log(state,this.products)
    })
    
  } 

}
