import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
id:number;
products:any;
  constructor(private ps:ProductService,
    private router:Router,
    private active:ActivatedRoute) {
      this.id = this.active.snapshot.params.id;
     }

  ngOnInit() {
     this.ps.getproduct(this.id).subscribe((data)=>{
      this.products=data;
      console.log(this.products);
    });
    }
  
list(){
  this.router.navigate(['product']);
}

}

