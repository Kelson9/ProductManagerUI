import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { CategorylistComponent } from './category/categorylist/categorylist.component';
import { CategoryupdateComponent } from './category/categoryupdate/categoryupdate.component';
import { CategorydetailsComponent } from './category/categorydetails/categorydetails.component';
import { CreatecategoryComponent } from './category/createcategory/createcategory.component';
import {ProductService} from './product.service';
import { CreateproductComponent } from './product/createproduct/createproduct.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    CategorylistComponent,
    CategoryupdateComponent,
    CategorydetailsComponent,
    CreatecategoryComponent,
    CreateproductComponent,
    ProductdetailsComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [ApiService,
  ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
