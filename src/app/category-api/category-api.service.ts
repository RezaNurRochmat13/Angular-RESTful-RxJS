import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Category } from '../model/Category';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryApiService {

  private API_URL = 'http://localhost:3000/category';

  constructor(private http: Http) { }

  getAllCategory(): Observable<Category[]> {
    return this.http
    .get(this.API_URL)
    .map((response: Response) => {
      return <Category[]>response.json().data;
    })
    .catch(this.handleError);
  }

  // Error Handling
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
