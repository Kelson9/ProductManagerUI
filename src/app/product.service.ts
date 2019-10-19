import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product.model';
import { Category } from './category';
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
  createproduct(category:Category,product:Product):Observable<Object>{
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/products/category/'+category.id,product);
  }
  updateproduct(product:Product,category:Category):Observable<object>{
    return this.http.put('https://sheltered-falls-45349.herokuapp.com/api/products/'+product.id+'/category/'+category.id,product);
  }
  getproductlist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products/');
  }
  deleteproduct(productid:number){
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/products/'+productid);
  }
  }
