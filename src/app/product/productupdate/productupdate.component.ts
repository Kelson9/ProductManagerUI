import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {ProductService} from 'src/app/product.service';
import {Model} from 'src/app/model';
@Component({
  selector: 'app-productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
id:number;
products:Model;
name:string;
  constructor(private ps:ProductService,
    private active:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.products=new Model();
    this.ps.getproduct(this.id).subscribe((data:Model)=>{
      this.products=data;
      console.log(this.products);
    });

    }
    updatecategory(){
    this.ps.updateproduct(this.id,this.name).subscribe((data:Model)=>
    {
      this.products=data;
      console.log(data);
    });
    this.products=new Model();
    this.gotoList();
  }
  onSubmit(){
    this.updatecategory();
  }
  gotoList(){
    this.router.navigate(['/product']);
  }
}
