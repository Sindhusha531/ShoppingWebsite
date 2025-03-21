import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcartComponentComponent } from './ecart-component/ecart-component.component';
import { FormsModule } from '@angular/forms';
import { AppSliderComponent } from './app-slider/app-slider.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MenCategoryComponent } from './men-category/men-category.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { WomenCategoryComponent } from './women-category/women-category.component';
import { KidCategoryComponent } from './kid-category/kid-category.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { ProdCatagoryComponent } from './prod-catagory/prod-catagory.component';




@NgModule({
  declarations: [
    AppComponent,
    EcartComponentComponent,
    AppSliderComponent,
    ProductDetailsComponentComponent,
    CartComponent,
    AccountComponent,
    FooterComponent,
    HeaderComponent,
    MenCategoryComponent,
    WomenCategoryComponent,
    KidCategoryComponent,
    HomeCategoryComponent,
    ProdCatagoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    OverlayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
