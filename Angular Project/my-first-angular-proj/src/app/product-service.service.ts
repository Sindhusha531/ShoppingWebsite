import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private addProdURl = 'http://localhost:8083/Products/getAllProd';
  private getProdByIdURl = 'http://localhost:8083/Products/getById';
  private getProdsByDesc = 'http://localhost:8083/Products/getByDesc';
  private addToCartURl = 'http://localhost:8083/Products/addtocart';
  private generateExcel = 'http://localhost:8083/Products/generateExcel';
  private getCartUrl = 'http://localhost:8083/Products/getcartitems';

  constructor(private http: HttpClient) { }
  //   addProduct(product:Product):Observable<Product>
  //   {

  // return this.http.post<Product>(this.addProdURl,product);
  //   }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.addProdURl);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.getProdByIdURl + "/" + id);
  }
  getProductsBydesc(name: String): Observable<Product[]> {
    return this.http.get<Product[]>(this.getProdsByDesc + "/" + name);
  }
  addTocart(product: Product): Observable<String> {
    return this.http.post<String>(this.addToCartURl, product);
  }
  downloadExcel() {
    return this.http.get(this.generateExcel, { responseType: 'blob' });
  }
  getCartItems():Observable<Product[]>{
    return this.http.get<Product[]>(this.getCartUrl)
    
  }
}
