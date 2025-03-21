import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-women-category',
  templateUrl: './women-category.component.html',
  styleUrls: ['./women-category.component.css']
})
export class WomenCategoryComponent {

  constructor(private router:Router){
    
  }
  handleClick(name: string) {
    console.log("Inside handle click",name)
    this.router.navigate(['/prodCat', name]).then(success => {
      if (success) {
        console.log("Navigation successful!");
      } else {
        console.error("Navigation failed!");
      }
    });
  }
}
