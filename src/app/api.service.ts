import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  getcategory(categoryId:number){
return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryId);
  }
 createcategory(category:Object){
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/category','category');
  }
  updatecategory(categoryId:number,name:string){
    return this.http.put('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryId,name);
  }
  getcategorylist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/category');
  }
  deletecategory(categoryId:number){
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryId);
  }
  }

