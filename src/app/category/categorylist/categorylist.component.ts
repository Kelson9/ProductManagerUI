import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
categories:[];
  constructor(private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  
 this.apiservice.getcategorylist().subscribe((data:any)=>{
  this.categories=data.results;
  console.log(this.categories);
});
}
deletecategory(movie_id:number){
  this.apiservice.deletecategory(movie_id).subscribe((data)=>{
    console.log(data);
  });
}
categorydetails(id:number){
  this.router.navigate(['details',id]);
}
}
