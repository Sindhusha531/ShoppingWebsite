import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() custId!:number;
  customer: any; 
  constructor(private custService: CustomerService,private route: ActivatedRoute)
  {

   
  }
  ngOnInit() {
    this.custService.getcustById(this.custId).subscribe({next:(data)=>{ this.customer = data;
      console.log("fetch successfull", data)}})
  }

}
