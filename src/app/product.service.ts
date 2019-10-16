import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Model } from './model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
  }
  getproduct(productid:number){
return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products/'+productid);
  }
  createproduct(categoryId:number,product:Model):Observable<Object>{
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/products/category/'+categoryId,product);
  }
  updateproduct(id:number,name:string):Observable<object>{
    return this.http.put('','');
  }
  getproductlist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products/');
  }
  deleteproduct(productid):Observable<any>{
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/products/'+productid);
  }
  }
