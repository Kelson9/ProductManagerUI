import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CreatecategoryComponent} from './category/createcategory/createcategory.component';
import {CategorylistComponent} from './category/categorylist/categorylist.component';
import {CategorydetailsComponent} from './category/categorydetails/categorydetails.component';
import {CategoryupdateComponent} from './category/categoryupdate/categoryupdate.component';
import {CreateproductComponent} from './product/createproduct/createproduct.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { ProductupdateComponent } from './product/productupdate/productupdate.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
const Route:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'add',component:CreatecategoryComponent},
    {path:'category',component:CategorylistComponent},
    {path:'details/:id',component:CategorydetailsComponent},
    {path:'update/:id',component:CategoryupdateComponent},
    {path:'addproduct',component:CreateproductComponent},
    {path:'product',component:ProductComponent},
     {path:'product/:id',component:ProductdetailsComponent},
     {path:'productupdate/:id',component:ProductupdateComponent},
     {path:'home',component:HomeComponent},
]
@NgModule({
imports:[RouterModule.forRoot(Route)],
exports:[RouterModule]
})

export class AppRoutingModule{}