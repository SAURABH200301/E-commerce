import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, forkJoin } from 'rxjs';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class APISService implements OnInit {
  products: any[] = [];
  categoryOption: string | undefined;

  private searchEvent= new Subject<any>();

  public eventState$ = this.searchEvent.asObservable();

  public getTheproducts(state:any){
    this.searchEvent.next(state);
  }

  ngOnInit(): void {
    // this.getAllProduct();
  }
  constructor(private http: HttpClient) { }

  getAllProduct() {
    // console.log("data",data)
    return this.http.get('https://dummyjson.com/products')

  }

  getProductByCategory(category: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/category/${category}`);
  }

  getProductByCategories(categories: any[]): Observable<any[]> {
    const requests = categories.map(category => this.getProductByCategory(category.name));

    return forkJoin(requests);
  }

  getItemsBySearch(word: string): void {
    // console.log(word)
    this.products = [...data.filter((prod: any) => prod.title.toLowerCase().includes(word.toLowerCase()))];
    // console.log(this.products)
    this.getTheproducts(this.products);
  }

  getSingleProduct(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}

