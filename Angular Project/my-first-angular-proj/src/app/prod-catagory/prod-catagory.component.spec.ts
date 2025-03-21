import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdCatagoryComponent } from './prod-catagory.component';

describe('ProdCatagoryComponent', () => {
  let component: ProdCatagoryComponent;
  let fixture: ComponentFixture<ProdCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
