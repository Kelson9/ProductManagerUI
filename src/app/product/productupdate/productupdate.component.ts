import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Category } from 'src/app/category.model';
import { ApiService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
product:any={};
categories:Category[];
id:number;
product_category: any = {};
  constructor(private ps:ProductService,private apiservice:ApiService,
    private router:Router) {
      console.log(this.product.id);
     }

  ngOnInit() {
    this.apiservice.getcategorylist().subscribe((data: any)=>{
      this.categories=data;
      console.log(this.categories);
    });
    }
   
  
  onSubmit(addPForm: NgForm){
    this.ps.updateproduct(this.product_category.id,this.product.id,addPForm.value).subscribe((data:any)=>
    {
      console.log("successfully created");
    });
    
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/product']);
  }
}
