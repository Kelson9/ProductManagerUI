import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
id:any;
products:any;
  constructor(private ps:ProductService,
    private router:Router,
    private active:ActivatedRoute) {

     }

  ngOnInit() {
    return this.ps.getproduct(this.id).subscribe((data)=>{
      this.products=data;
      console.log(this.products);
    });
    }
  
list(){
  this.router.navigate(['product']);
}

}
/*movie:any;
id:any;
  constructor(private apiservice:ApiService,
    private active:ActivatedRoute){
      this.id = this.active.snapshot.params.id;

     }

  ngOnInit() {
    return this.apiservice.getMovie(this.id).subscribe((data:any)=>{
      this.movie=data;
      console.log(this.movie);*/
