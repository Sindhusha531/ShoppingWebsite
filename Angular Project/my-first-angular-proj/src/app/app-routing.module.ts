import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';
import { EcartComponentComponent } from './ecart-component/ecart-component.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { MenCategoryComponent } from './men-category/men-category.component';
import { ProdCatagoryComponent } from './prod-catagory/prod-catagory.component';

const routes: Routes = [
 
  { path: 'products', component: EcartComponentComponent },
  { path: 'product/:id', component: ProductDetailsComponentComponent },
  {path:'cart',component:CartComponent},
  {path:'account',component:AccountComponent},
  {path:'prodCat/:name',component:ProdCatagoryComponent},
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
