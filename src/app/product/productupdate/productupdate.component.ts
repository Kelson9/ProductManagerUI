import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import { Product } from 'src/app/product.model';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
products:Product;
category:Category;
name:string;
id:number;
  constructor(private ps:ProductService,
    private active:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.products=new Product();
    this.ps.getproduct(this.id).subscribe((data:Product)=>{
      this.products=data;
      console.log(this.products);
    });

    }
    updateproduct(){
    this.ps.updateproduct(this.id,this.products).subscribe((data:Product)=>
    {
      this.products=data;
      console.log(data);
    this.products=new Product();
  });
    this.gotoList();
  }
  onSubmit(){
    this.updateproduct();
  }
  gotoList(){
    this.router.navigate(['/product']);
  }
}
