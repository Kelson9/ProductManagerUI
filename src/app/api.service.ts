import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from './category';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  getcategory(categoryId:number){
return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryId);
  }
 createcategory(category:Category){
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/category',category);
  }
  updatecategory(category:Category){
    return this.http.put('https://sheltered-falls-45349.herokuapp.com/api/category/'+category.id,category);
  }
  getcategorylist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/category');
  }
  deletecategory(categoryId:number){
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/category/'+categoryId);
  }
  }

