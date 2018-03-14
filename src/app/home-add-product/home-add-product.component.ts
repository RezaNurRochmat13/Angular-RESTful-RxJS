import { Component, OnInit} from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProductApiService } from '../product-api/product-api.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-home-add-product',
  templateUrl: './home-add-product.component.html',
  styleUrls: ['./home-add-product.component.css'],
  providers: [ProductApiService]
})
export class HomeAddProductComponent implements OnInit {
  ProductAPIService: any;
  statusCode: number;
  requestProcessing = false;
  processValidation = false;

  // Variable Product
  name: string;
  description: string;


  constructor(private _product: ProductApiService ) {
   }



  ngOnInit() {


  }

  httpPost() {
    const success = this._product.httpPost(this.name, this.description);
  }

  clickMethod() {
    if (confirm('Save this changed?')) {
      console.log('Implement delete functionality here');
    }
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
