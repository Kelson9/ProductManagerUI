import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/product.service';
import {Router} from '@angular/router';
import {Model} from 'src/app/model';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
product:Model=new Model();
submitted=false;
  constructor(private ps:ProductService,
    private router:Router) { }

  ngOnInit() {
  }
newCategory():void{
  this.submitted=false;
  this.product=new Model();

}
save(){
  this.ps.createproduct(this.product).subscribe(data=>{
    console.log(data);
    this.product=new Model();});
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