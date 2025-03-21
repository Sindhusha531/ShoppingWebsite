import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details-component',
  templateUrl: './product-details-component.component.html',
  styleUrls: ['./product-details-component.component.css']
})
export class ProductDetailsComponentComponent {
  product: any; // Placeholder for product details
  selectedQuantity: String = '';
  customQuantity: number | null = null; // Holds custom quantity for "10+"
  numbers: string[] = [];

  constructor(private route: ActivatedRoute, private prodService: ProductServiceService) { 
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']; 
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get product ID from route
    console.log("inside fetch", id)
    this.prodService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
        console.log("fetch successfull", data)
        // this.product = this.products.find((p) => p.prodId === id); // Fetch product details
      }
    })
  }
  onQuantityChange(): void {
    if (this.selectedQuantity !== '10+') {
      this.customQuantity = null; // Reset custom quantity if not "10+"
    }
  }
    addToCart() {
      console.log("quantity", this.selectedQuantity)
      let finalQuantity: number;
      if (this.selectedQuantity === '10+' && this.customQuantity) {
        finalQuantity = this.customQuantity; // Use custom quantity for "10+"
      } else {
        finalQuantity = Number(this.selectedQuantity); // Convert selected dropdown value to a number
      }
  
      if (this.product) {
        const product: Product = {
          ...this.product,
          quantity: finalQuantity,
        };
        console.log("Prod quantity", product)
        this.prodService.addTocart(product).subscribe(() => console.log("cart items"));
      }
  
    }
  
}
