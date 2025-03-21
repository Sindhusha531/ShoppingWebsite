import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-ecart-component',
  templateUrl: './ecart-component.component.html',
  styleUrls: ['./ecart-component.component.css']
})
export class EcartComponentComponent {
  products: Product[] = [];
  filteredproducts: Product[] = [];
  selectedProduct: Product | null = null;
  selectedFilterProduct: Product | null = null;
  selectedProductId: number = 0;
  numbers: string[] = [];
  selectedQuantity: String = '';
  customQuantity: number | null = null; // Holds custom quantity for "10+"
  searchtext: string = '';
  selectedCustId: number = 101;

  constructor(
    private prodService: ProductServiceService,
    private router: Router // Inject Router
  ) { this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']; }





  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts() {
    console.log("inside fetch")
    this.prodService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log("fetch successfull", data)
      }
    })
  }
  onProductChange() {
    console.log("inside OnProductChange", this.selectedProductId)
    console.log("inside OnProductChange", this.products)
    this.selectedProduct = this.products.find(product => product.prodId === Number(this.selectedProductId)) || null;
    // this.searchText = this.selectedProduct // Set the selected item's name in the search bar
    //this.products = [product]; 
    // this.selectedProductId

  }
  onQuantityChange(): void {
    if (this.selectedQuantity !== '10+') {
      this.customQuantity = null; // Reset custom quantity if not "10+"
    }
  }

  filterProducts() {
    const searchlowerText = this.searchtext.toLocaleLowerCase();
    this.filteredproducts = this.products.filter((product) => product.prodName.toLowerCase().includes(searchlowerText));

  }
  
  accountDet() {
    this.router.navigate(['/account']);

  }
  downloadExcel()
  {
    this.prodService.downloadExcel().subscribe((response)=>{
      const blob=new Blob([response],{ type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url=window.URL.createObjectURL(blob);
      const a=document.createElement('a');
      a.href=url;
      a.download='users.xlsx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    },
    (error) => {
      console.error('Error downloading the Excel file', error);
    
    });
  }
}
