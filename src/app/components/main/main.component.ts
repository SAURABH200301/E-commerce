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
  category: any[] = [];
  updatedArray: any[] = [];

  constructor(private service: APISService, public cart: CartService) {
    service.getAllProduct().subscribe((resp: any) => {
      this.products = resp.products;
    });
    service.eventState$.subscribe(state => {
      if (state.length === 0) {
        this.service.getAllProduct().subscribe((resp: any) => {
          this.products = resp.products;
        });

      } else
        this.products = state;
    })
  }

  onCategoryChange($event: any) {
    this.products = [];
    if ($event.isChecked === false) { //this filter is to remove the category from the array after unchecked
      this.category = this.category.filter((cat) => cat.id !== $event.id);

    } else {
      this.category.push($event);
    }
    const arr = this.service.getProductByCategories(this.category);
    let i = 0;
    arr.subscribe((pro: any) => {
      pro.map((p: any) => {
        this.products = [...this.products, ...p.products];
      })

      i++;
    })
    if (this.category.length === 0) {
      this.service.getAllProduct().subscribe((resp: any) => {
        this.products = resp.products;
      });
    }

  }
}
