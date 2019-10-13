import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import {ApiService} from 'src/app/api.service';
import { Model } from '../model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:any;
  products:Model[];
  constructor(private ps:ProductService,private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  
 this.ps.getproductlist().subscribe((data:Model[])=>{
  this.products=data;
  console.log(this.products);
});
}

deleteproduct(id:number){
  this.ps.deleteproduct(this.id).subscribe((data)=>{
    console.log(data);
  });
}
productdetails(id:number){
  this.router.navigate(['product',id]);
}
productupdate(id:number){
  this.router.navigate(['productupdate',id]);
}
}



