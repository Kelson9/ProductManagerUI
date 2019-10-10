import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
import { Model } from 'src/app/model';

@Component({
  selector: 'app-createcategory',
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
category:Model=new Model();
submitted=false;
  constructor(private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
  }
newCategory():void{
  this.submitted=false;
  this.category=new Model();

}
save(){
  this.apiservice.createcategory(this.category).subscribe(data=>{
    console.log(data);
    this.category=new Model();
    this.gotoList();
  });
}
onSubmit(){
  this.submitted=true;
  this.save();
}
gotoList(){
  this.router.navigate(['/category']);
}
}
