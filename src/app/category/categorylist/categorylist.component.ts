import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
categories:Model[];
id:number;
  constructor(private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  
 this.apiservice.getcategorylist().subscribe((data:Model[])=>{
  this.categories=data;
  console.log(this.categories);
});
}
deletecategory(id:number){
  this.apiservice.deletecategory(this.id).subscribe((data)=>{
    console.log(data);
  });
}
categorydetails(id:number){
  this.router.navigate(['details',id]);
}
categoryupdate(id:any){
  return this.router.navigate(['/update',id])
}
}
