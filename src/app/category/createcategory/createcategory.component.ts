import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/category';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
category:Category=new Category();
submitted=false;
  constructor(private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  }
newCategory():void{
  this.submitted=false;
  this.category=new Category();

}
save(){
  this.apiservice.createcategory(this.category).subscribe(data=>{
    this.category=new Category();
    console.log(this.category);
  });
  this.gotoList();
}
onSubmit(){
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/category']);
}
}
