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
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=0e175600a982c619f3646375d1e914bb&language=en-US&page=1');
  }
  deleteproduct(movie_id:number):Observable<any>{
    return this.http.delete('https://api.themoviedb.org/3/movie/'+movie_id+'?api_key=0e175600a982c619f3646375d1e914bb&language=en-US&page=1');
  }
  }
