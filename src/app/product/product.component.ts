import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductApiService } from '../product-api/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductApiService]
})
export class ProductComponent implements OnInit {

  aArray: Product[];

  constructor(private productService: ProductApiService) { }

  getAllProducts(): void {
    this.productService.getAllProducts()
    .subscribe(
      resultArray => this.aArray = resultArray,
      error => console.log('Error ::' + error)
    );
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  deleteEvent() {
    if (confirm('Are you sure?')) {
      console.log('Implement delete functionality here');
    }
  }

}
