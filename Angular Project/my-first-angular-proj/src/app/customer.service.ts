import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
   private getCustbyId='http://localhost:8080/customer/getCustById';

  constructor(private http:HttpClient) { }
  getcustById(id:number):Observable<Customer>
  {
    return this.http.get<Customer>(this.getCustbyId+"/"+id);
  }
}
