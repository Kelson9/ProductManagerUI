import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Router,ActivatedRoute} from '@angular/router';
import {Model} from 'src/app/model';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
product:Model=new Model();
submitted=false;
id:number;
  constructor(private ps:ProductService,
    private router:Router,
    private active:ActivatedRoute) {
      this.id=this.active.snapshot.params.id;
     }

  ngOnInit() {
  }
newproduct():void{
  this.submitted=false;
  this.product=new Model();
}
save(){
  this.ps.createproduct(this.id,this.product).subscribe(data=>{
    this.product=new Model();
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