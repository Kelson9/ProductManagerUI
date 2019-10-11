import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
  }
  getproduct(id:number):Observable<any>{
return this.http.get('');
  }
  createproduct(product:object):Observable<object>{
    return this.http.post('','');
  }
  updateproduct(id:number,name:string):Observable<object>{
    return this.http.put('','');
  }
  getproductlist():Observable<any>{
    return this.http.get('');
  }
  deleteproduct(movie_id:number):Observable<any>{
    return this.http.delete('');
  }
  }
