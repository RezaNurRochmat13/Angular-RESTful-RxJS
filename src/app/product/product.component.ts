import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductApiService } from '../product-api/product-api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductApiService]
})
export class ProductComponent implements OnInit {

  // Array All Product
  aArray: Product[];

  // Sample Pipes
  // tanggalsaiki = new Date(2018, 3, 15); // Date Formatting

  constructor(private productService: ProductApiService) { }

  // Event Get All Data Product
  getAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(
      resultArray => this.aArray = resultArray,
      error => console.log('Error ::' + error)
    );
  }

  // Event Delete Product
  public deleteProduct(product) {
    if (confirm('Are you sure you want to delete ' + product.id + '?')) {
      this.productService.deleteProduct(product.id).subscribe(
        data => {
          // refresh the list
          this.getAllProducts();
          return true;
        },
        error => {
          console.error('Error deleting product!');
          return Observable.throw(error);
        }
      );
    }
  }

  // Get All Product On Init Event
  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteEvent() {
    if (confirm('Are you sure?')) {
      console.log('Implement delete functionality here');
    }
  }

}
