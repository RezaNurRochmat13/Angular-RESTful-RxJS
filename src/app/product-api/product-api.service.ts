import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Product } from '../model/Product';
import { environment } from '../../environments/environment';


@Injectable()
export class ProductApiService {
  private productAPI_URL = environment.productAPI_URL;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) {  }

  // API: GET All /products
  getAllProducts(): Observable<Product[]> {
    return this.http
      .get(this.productAPI_URL)
      .map((response: Response) => {
        return <Product[]>response.json().data;
      })
      .catch(this.handleError);
  }

  // API: POST /products
  public httpPost(name: string, description: string) {
    const req = this.http.post(this.productAPI_URL, {
      name: name,
      description: description
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured');
        }
      );
  }

  // API: Delete Product
  public deleteProduct(product) {
    return this.http.delete(this.productAPI_URL + '/' + product);
  }

  // Handle Error
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
