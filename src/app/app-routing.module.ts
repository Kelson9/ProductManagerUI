import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CreatecategoryComponent} from './category/createcategory/createcategory.component';
import {CategorylistComponent} from './category/categorylist/categorylist.component';
import {CategorydetailsComponent} from './category/categorydetails/categorydetails.component';
import {CategoryupdateComponent} from './category/categoryupdate/categoryupdate.component';
import { ProductComponent } from './product/product.component';
import {CreateproductComponent} from './product/createproduct/createproduct.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
const Routes:Routes=[
    {path:'',redirectTo:'category',pathMatch:'full'},
    {path:'add',component:CreatecategoryComponent},
    {path:'category',component:CategorylistComponent},
    {path:'details/:id',component:CategorydetailsComponent},
    {path:'update/:id',component:CategoryupdateComponent},
    {path:'product',component:ProductComponent},
    {path:'addproduct',component:CreateproductComponent},
     {path:'product/:id',component:ProductdetailsComponent},
]
@NgModule({
imports:[RouterModule.forRoot(Routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}