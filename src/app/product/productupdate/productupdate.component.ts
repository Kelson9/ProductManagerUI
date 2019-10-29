import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
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
    private router:Router,private active: ActivatedRoute) {
   
     }

  ngOnInit() {
    this.product=new Product();
    this.id=this.active.snapshot.params.id;
    this.ps.getproduct(this.id).subscribe((data:Product)=>{
      this.product=data;
      console.log(this.product);
    });
    this.apiservice.getcategorylist().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
    });
  }
  onSubmit(addPForm: NgForm){
    this.ps.updateproduct(this.product_category.id,this.product.id,addPForm.value).subscribe((data:any)=>
    {
    this.product_category=data;
    console.log(this.product_category);
    this.product=new Product();
    });
    
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/product']);
  }
}
