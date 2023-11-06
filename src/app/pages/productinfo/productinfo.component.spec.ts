import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinfoComponent } from './productinfo.component';


describe('ProductinfoComponent', () => {
  let component: ProductinfoComponent;
  let fixture: ComponentFixture<ProductinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductinfoComponent]
    });
    fixture = TestBed.createComponent(ProductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
