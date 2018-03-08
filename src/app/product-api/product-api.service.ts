import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from '../model/Product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class ProductApiService {
  private API_URL = 'http://localhost:3000/product';

  constructor(private http: Http) {  }

  // API: GET /product
  getAllProducts(): Observable<Product[]> {
    return this.http
      .get(this.API_URL)
      .map((response: Response) => {
        return <Product[]>response.json().data;
      })
      .catch(this.handleError);
  }

  // API: POST /todos
  public createProduct(product: Product) {
    // will use this.http.post()
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
