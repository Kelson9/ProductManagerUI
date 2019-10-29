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
import { ProductupdateComponent } from './product/productupdate/productupdate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

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
    ProductupdateComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
MatProgressSpinnerModule,
AngularFireModule,
  ],
  providers: [ApiService,
  ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
