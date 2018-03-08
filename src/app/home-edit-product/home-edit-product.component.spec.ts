import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEditProductComponent } from './home-edit-product.component';

describe('HomeEditProductComponent', () => {
  let component: HomeEditProductComponent;
  let fixture: ComponentFixture<HomeEditProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEditProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
