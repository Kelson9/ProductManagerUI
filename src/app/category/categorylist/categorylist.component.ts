import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute ,Params} from '@angular/router';
import { Category} from 'src/app/category.model';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
categories:Category[];
  constructor(private apiservice:ApiService,
    private router:Router,
    private active:ActivatedRoute) {
     }
id:number;
  ngOnInit() {
this.getcategory();
}
deletecategory(id: number){
  this.apiservice.deletecategory(id).subscribe((data)=>{
console.log(data);
  });
  console.log("deleted category successfully");
}
categorydetails(id:number){
  this.router.navigate(['details',id]);
}
categoryupdate(id:number){
  return this.router.navigate(['/update',id]);
}
getcategory(){
  this.apiservice.getcategorylist().subscribe((data:Category[])=>{
   this.categories=data;
   console.log(this.categories);
 });
   }
}
