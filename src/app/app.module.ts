import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { HomeAddProductComponent } from './home-add-product/home-add-product.component';
import { HomeEditProductComponent } from './home-edit-product/home-edit-product.component';
import { ProductApiService } from './product-api/product-api.service';
import { CategoryApiService } from './category-api/category-api.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CategoryComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HeaderLoginComponent,
    HomeAddProductComponent,
    HomeEditProductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [ProductApiService, CategoryApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
