import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Category } from 'src/app/category.model';
@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
id:number;
name:string;
category:Category;
  constructor(private apiservice:ApiService,
    private active:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.category=new Category();
    this.id=this.active.snapshot.params.id;
    this.apiservice.getcategory(this.id).subscribe((data:Category)=>{
      this.category=data;
      console.log(this.category);
    });

    }
    updatecategory(){
    this.apiservice.updatecategory(this.category).subscribe((data:Category)=>
    {
      this.category=data;
      console.log(this.category);
      this.category=new Category();
    });
   
    this.gotoList();
  }
  onSubmit(){
    this.updatecategory();
  }
  gotoList(){
    this.router.navigate(['/category']);
    console.log('Loading...');
  }
}

