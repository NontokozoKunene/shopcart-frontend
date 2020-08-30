import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  _Url = "http://localhost:8000/"
  

  //get PRODUCTS
  get_product() {
    return this.http.get<any>(this._Url + 'product')
  }

  //get cart
  get_cart() {
    return this.http.get<any>(this._Url + 'cart')
  }

  //get PRODUCTS
  add_to_cart(id, quantity) {
    return this.http.post<any>(this._Url + 'cart', { id, quantity });
  }

}
