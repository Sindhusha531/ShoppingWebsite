import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-men-category',
  templateUrl: './men-category.component.html',
  styleUrls: ['./men-category.component.css']
})
export class MenCategoryComponent {

  constructor(private router: Router) {

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
