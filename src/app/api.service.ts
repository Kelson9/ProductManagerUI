import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from './category.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  private url="https://sheltered-falls-45349.herokuapp.com/api/category";
  getcategory(categoryId:number){
return this.http.get(this.url +'/' +categoryId);
  }
 createcategory(category:Category){
   console.log('successfully created'+'/'+category.name);
    return this.http.post(this.url,category);
  }
  updatecategory(category:Category){
    return this.http.put(this.url+'/'+category.id,category);
  }
  getcategorylist():Observable<any>{
    return this.http.get(this.url);
  }
  deletecategory(categoryId:number){
    return this.http.delete(this.url+'/'+categoryId);
  }

}
