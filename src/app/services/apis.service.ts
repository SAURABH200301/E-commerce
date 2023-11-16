import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APISService implements OnInit {
  products: any;
  categoryOption:string|undefined;
  ngOnInit(): void {
    // this.getAllProduct();
  }
  constructor(private http: HttpClient) { }

  getAllProduct() {
    return this.http.get('https://dummyjson.com/products')
  }
  getProductByCategory(category:string){
    return this.http.get(`https://dummyjson.com/products/category/${category}`)
  }
  getSingleProduct(id:string){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}

