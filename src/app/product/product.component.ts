import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import {ApiService} from 'src/app/api.service';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id:number;
  products:Product[];
  constructor(private ps:ProductService,private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  
 this.ps.getproductlist().subscribe((data:Product[])=>{
  this.products=data;
  console.log(this.products);
});
}

deleteproduct(id: number){
  this.ps.deleteproduct(id).subscribe((data)=>{
    console.log(data);
  });
  console.log("deleted successfully");
  alert('successfully deleted ');
}
productdetails(id:number){
  this.router.navigate(['product',id]);
}
productupdate(id:number){
  this.router.navigate(['productupdate',id]);
}
}



