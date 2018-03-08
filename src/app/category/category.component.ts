import { Component, OnInit } from '@angular/core';
import { Category } from '../model/Category';
import { CategoryApiService } from '../category-api/category-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryArray: Category[];

  constructor(private categoryService: CategoryApiService) { }

  getAllCategory(): void {
    this.categoryService.getAllCategory()
    .subscribe(
      resultArray => this.categoryArray = resultArray,
      error => console.log('Error ::' + error)
    );
  }

  ngOnInit() {
    this.getAllCategory();
  }

}
