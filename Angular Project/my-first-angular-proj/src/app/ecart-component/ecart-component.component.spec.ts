import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcartComponentComponent } from './ecart-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductServiceService } from '../product-service.service';

describe('EcartComponentComponent', () => {
  let component: EcartComponentComponent;
  let fixture: ComponentFixture<EcartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], // Use HttpClientTestingModule
             declarations: [ EcartComponentComponent ],
             providers: [ProductServiceService],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
