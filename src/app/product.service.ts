import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http:HttpClient) { 
  }
  
  private url="https://sheltered-falls-45349.herokuapp.com/api/products";
  getproduct(productid:number){
return this.http.get(this.url +'/' +productid);
  }
  createproduct(categoryid:number,product:Product){
    return this.http.post(this.url+'/category/'+categoryid,product);
  }
  updateproduct(categoryid:number,productid:number,product:Product){
    return this.http.put(this.url+'/'+productid+'/category/'+categoryid,product);
  }
  getproductlist():Observable<any>{
    return this.http.get(this.url + '/');
  }
  deleteproduct(productid:number){
    return this.http.delete(this.url+'/'+productid);
  }

}