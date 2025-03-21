import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  products: Product[] = [];
  cartProducts: Product[] = [];
  filteredproducts: Product[] = [];
  cartItemCount = 0;
  searchtext: string = '';
  selectedProductId: any;
  selectedProduct: Product | null = null;
  constructor(
    private prodService: ProductServiceService,
    private router: Router // Inject Router
  ) {

  }
  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCartProducts();
  }
  fetchProducts() {
    this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log("fetch successfull", data)
      }
    })
  }
  fetchCartProducts() {
    this.prodService.getCartItems().subscribe({
      next: (data) => { this.cartProducts = data; 
        this.cartItemCount=this.cartProducts.length;
        console.log("cart size",this.cartProducts.length);
console.log("this.cartItemCount",this.cartItemCount)
      }
    })
  }
  onProductChange() {

    this.selectedProduct = this.products.find(product => product.prodId === Number(this.selectedProductId)) || null;
    //this.searchText = this.selectedProduct // Set the selected item's name in the search bar
    //this.products = [product]; 
    // this.selectedProductId

  }
  filterProducts() {
    const searchlowerText = this.searchtext.toLocaleLowerCase();
    console.log("filterProductsfilterProducts")
    this.filteredproducts = this.products.filter((product) => product.prodName.toLowerCase().includes(searchlowerText));

  }
}
