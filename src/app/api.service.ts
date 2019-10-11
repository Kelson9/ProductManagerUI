import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  getcategory(id:number):Observable<any>{
return this.http.get('');
  }
  createcategory(category:object):Observable<object>{
    return this.http.post('','');
  }
  updatecategory(id:number,name:string):Observable<object>{
    return this.http.put('','');
  }
  getcategorylist():Observable<any>{
    return this.http.get('');
  }
  deletecategory(movie_id:number):Observable<any>{
    return this.http.delete('');
  }
  }

