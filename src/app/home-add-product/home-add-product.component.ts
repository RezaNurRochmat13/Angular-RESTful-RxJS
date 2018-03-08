import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-add-product',
  templateUrl: './home-add-product.component.html',
  styleUrls: ['./home-add-product.component.css']
})
export class HomeAddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMethod() {
    if (confirm('Save this changed?')) {
      console.log('Implement delete functionality here');
    }
  }

}
