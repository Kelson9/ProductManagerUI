import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Model } from 'src/app/model';
@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
id:number;
category:Model;
name:string;
  constructor(private apiservice:ApiService,
    private active:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.category=new Model();
    /*this.id=this.router.snapshot.params['id'];*/
    this.apiservice.getcategory(this.id).subscribe(data=>{
      this.category=data;
      console.log(this.category);
    });

    }
    updatecategory(){
    this.apiservice.updatecategory(this.id,this.name).subscribe((data:Model)=>
    {
      this.category=data;
      console.log(data);
      this.category=new Model();
    });
   
    this.gotoList();
  }
  onSubmit(){
    this.updatecategory();
  }
  gotoList(){
    this.router.navigate(['/category']);
  }
}

