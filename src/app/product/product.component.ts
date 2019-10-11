import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import {ApiService} from 'src/app/api.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:[];
  categories:[];
  constructor(private ps:ProductService,private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  
 this.ps.getproductlist().subscribe((data:any)=>{
  this.products=data.results;
  console.log(this.products);
});
this.apiservice.getcategorylist().subscribe((data:any)=>{
  this.categories=data.results;
  console.log(this.categories);
});
}

deleteproduct(movie_id:number){
  this.ps.deleteproduct(movie_id).subscribe((data)=>{
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



