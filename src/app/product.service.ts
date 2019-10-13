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
return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products'+'/'+id);
  }
  createproduct(product:object):Observable<object>{
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/products/category/5 ','');
  }
  updateproduct(id:number,name:string):Observable<object>{
    return this.http.put('','');
  }
  getproductlist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products/');
  }
  deleteproduct(id:number):Observable<any>{
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/products/id');
  }
  }
