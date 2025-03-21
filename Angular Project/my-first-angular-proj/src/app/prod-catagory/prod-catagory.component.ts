import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { min } from 'rxjs';

@Component({
  selector: 'app-prod-catagory',
  templateUrl: './prod-catagory.component.html',
  styleUrls: ['./prod-catagory.component.css']
})
export class ProdCatagoryComponent {
  brands = ['Roadster', 'SPYKAR', 'Flying Machine', 'WRONG','PEPE','Taruni','FirstCry','Nike','W','Levis','U.S.POLO','Max']; // Dynamic brand list
  colours = ['Red', 'Blue', 'Black', 'Gray','White','Maroon','Peach','Yellow']; // Dynamic brand list

  products: Product[] = [];
   // Initialize with all products
  selectedBrands: string[] = []; // Store selected brands
  filteredProducts: any[] = [];
  selectedColours: any[]=[];
  
  minPrice: number = 300; // Minimum price range
  maxPrice: number = 28000; // Maximum price range


  constructor(private route:ActivatedRoute,private prodService:ProductServiceService,private router:Router){

  }
  ngOnInit(){
    this.fetchProducts();
   

  }
  fetchProducts() {
    
    const cat= this.route.snapshot.paramMap.get('name'); 
    if(cat!=null){
    this.prodService.getProductsBydesc(cat).subscribe({
      next: (data) => {
        this.products = data;
        console.log("ngoninit prods",this.products)
        this.filteredProducts = [...this.products];
        console.log("ngoninit",this.filteredProducts)
        // this.product = this.products.find((p) => p.prodId === id); // Fetch product details
      }
    })
  }
 
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
  sortProducts(criteria: string): void {
    if (criteria === 'name') {
      this.filteredProducts.sort((a, b) => a.prodName.localeCompare(b.prodName));
    } else if (criteria === 'priceAsc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (criteria === 'priceDesc') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
  filterByPrice(event: any): void {
    this.maxPrice = event.target.value; // Update the maximum price dynamically
    console.log("maxPrice",this.maxPrice)
    this.applyFilters();
  }
  filterProducts(event: any,filterType: 'brand' | 'color'): void {
    const value = event.target.value;
    const isChecked = event.target.checked;
    if (filterType === 'brand'){
    if (isChecked) {
      if (!this.selectedBrands.includes(value)) {
        this.selectedBrands.push(value);
      }
     } else {
        this.selectedBrands = this.selectedBrands.filter((b: any) => b !== value);
     }
  }else if (filterType === 'color'){
    if (isChecked) {
      if (!this.selectedColours.includes(value)) {
        this.selectedColours.push(value);
        console.log("selectedColours",this.selectedColours)
      }
     } else {
        this.selectedColours = this.selectedColours.filter((b: any) => b !== value);
     }
  }

    this.applyFilters();
  }
  applyFilters(): void {
    console.log("selectedColours",this.selectedColours)

    if (this.selectedBrands.length === 0 && this.selectedColours.length===0 && this.minPrice === 300 && this.maxPrice === 28000 ) {
           this.filteredProducts = [...this.products]; // Show all products
    } else {
      console.log("else block",this.selectedColours)

     
      this.filteredProducts = this.products.filter(product =>
        (this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand)) &&
        (this.selectedColours.length === 0 || this.selectedColours.includes(product.colour))&&
        product.price>=this.minPrice &&
        product.price<=this.maxPrice 
      );
    }
    console.log("Filtered Products:", this.filteredProducts);
  }
}
