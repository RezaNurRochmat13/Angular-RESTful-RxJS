import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-edit-product',
  templateUrl: './home-edit-product.component.html',
  styleUrls: ['./home-edit-product.component.css']
})
export class HomeEditProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickMethod() {
    if (confirm('Save this changed?')) {
      console.log('Implement delete functionality here');
    }
  }

}
