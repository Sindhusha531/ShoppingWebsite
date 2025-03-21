import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kid-category',
  templateUrl: './kid-category.component.html',
  styleUrls: ['./kid-category.component.css']
})
export class KidCategoryComponent {
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
