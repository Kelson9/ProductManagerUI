import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Router} from '@angular/router';
import { Product } from 'src/app/product.model';
import { Category } from 'src/app/category.model';
import { ApiService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
product: any = {};
categories: Category[];
id:number;
submitted=false;
product_category: any = {};

  constructor(private ps:ProductService,private apiservice:ApiService,
    private router:Router) {
      console.log(this.product_category.id);

     }

  ngOnInit() {
    this.apiservice.getcategorylist().subscribe((data: any)=>{
      this.categories=data;
      console.log(this.categories);
    });
  }

onSubmit(addPForm: NgForm){
  this.ps.createproduct(this.product_category.id, addPForm.value).subscribe((data: any)=>{
    console.log("successfully created");
  });
  this.gotoList();
}
gotoList(){
  this.router.navigate(['/product']);
}
}
