import { Component } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cartProducts: Product[] = [];
    product: any; // Placeholder for product details
    selectedQuantity: String = '';
    customQuantity: number | null = null; // Holds custom quantity for "10+"
    numbers: string[] = [];
   constructor(
      private prodService: ProductServiceService,
      private router: Router // Inject Router
    ) {
  
    }
  ngOnInit(): void {
    this.fetchCartProducts();
  }
  fetchCartProducts() {
    this.prodService.getCartItems().subscribe({
      next: (data) => { this.cartProducts = data; 
     }
    })
  }
  viewProductDetails(prodId: number) {
    console.log("inside viewdetails", prodId)
    this.router.navigate(['/product', prodId]).then(success => {
      if (success) {
        console.log("Navigation successful!");
      } else {
        console.error("Navigation failed!");
      }
    });
  }
  onQuantityChange(): void {
    if (this.selectedQuantity !== '10+') {
      this.customQuantity = null; // Reset custom quantity if not "10+"
    }
  }
  placeOrder(){

  }
  deleteProduct(prodId: number): void {
    this.cartProducts = this.cartProducts.filter(product => product.prodId !== prodId);
}
  // addToCart() {
  //   console.log("quantity", this.selectedQuantity)
  //   let finalQuantity: number;
  //   if (this.selectedQuantity === '10+' && this.customQuantity) {
  //     finalQuantity = this.customQuantity; // Use custom quantity for "10+"
  //   } else {
  //     finalQuantity = Number(this.selectedQuantity); // Convert selected dropdown value to a number
  //   }

  //   if (this.product) {
  //     const product: Product = {
  //       ...this.product,
  //       quantity: finalQuantity,
  //     };
  //     console.log("Prod quantity", product)
  //     this.prodService.addTocart(product).subscribe(() => console.log("cart items"));
  //   }

  // }

}
