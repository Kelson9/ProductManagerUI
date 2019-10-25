import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product.model';
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
  createproduct(categoryid:number,product:Product){
    return this.http.post('https://sheltered-falls-45349.herokuapp.com/api/products/category/'+categoryid,product);
  }
  updateproduct(categoryid:number,productid:number,product:Product){
    return this.http.put('https://sheltered-falls-45349.herokuapp.com/api/products/'+productid+'/category/'+categoryid,product);
  }
  getproductlist():Observable<any>{
    return this.http.get('https://sheltered-falls-45349.herokuapp.com/api/products/');
  }
  deleteproduct(productid:number){
    return this.http.delete('https://sheltered-falls-45349.herokuapp.com/api/products/'+productid);
  }
  }
