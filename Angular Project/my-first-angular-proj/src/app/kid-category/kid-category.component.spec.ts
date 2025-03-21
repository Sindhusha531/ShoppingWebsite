import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidCategoryComponent } from './kid-category.component';

describe('KidCategoryComponent', () => {
  let component: KidCategoryComponent;
  let fixture: ComponentFixture<KidCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
