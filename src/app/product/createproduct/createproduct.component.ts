import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/product.model';
import { Category } from 'src/app/category';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
product:Product=new Product();
category:Category;
submitted=false;
id:number;
  constructor(private ps:ProductService,
    private router:Router,
    private active:ActivatedRoute) {
      this.id=this.active.snapshot.params.id;
     }

  ngOnInit() {
  
  this.product=new Product();
}
save(){
  this.ps.createproduct(this.id,this.product).subscribe((data:Product)=>{
    this.product=new Product();
    console.log(this.product);
  });
  this.gotoList();
}
onSubmit(){
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/product']);
}
}