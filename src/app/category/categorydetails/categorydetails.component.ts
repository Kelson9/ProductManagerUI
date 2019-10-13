import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
id:number;
category;
  constructor(private apiservice:ApiService,
    private router:Router,
    private active:ActivatedRoute) {
     }

  ngOnInit() {
    this.apiservice.getcategory(this.id).subscribe((data)=>{
      this.category=data;
      console.log(this.category);
    });
    }
  
list(){
  this.router.navigate(['category']);
}
}
