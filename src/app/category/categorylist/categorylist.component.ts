import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute ,Params} from '@angular/router';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
category:Model;
id:number;
  constructor(private apiservice:ApiService,
    private router:Router,
    private active:ActivatedRoute) {
      this.id = this.active.snapshot.params.id;
     }

  ngOnInit() {
  
 this.apiservice.getcategorylist().subscribe((data:Model)=>{
  this.category=data;
  console.log(this.category);
});
}
deletecategory(){
  this.apiservice.deletecategory(this.category).subscribe((data:Model)=>{
    this.category=data;
    console.log(this.category);
    this.category=new Model()
   
  });
}
categorydetails(id:number){
  this.router.navigate(['details',id]);
}
categoryupdate(id:number){
  return this.router.navigate(['/update',id])
}
}
