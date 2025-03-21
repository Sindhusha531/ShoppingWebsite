import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponentComponent } from './product-details-component.component';
import { ProductServiceService } from '../product-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ProductDetailsComponentComponent', () => {
  let component: ProductDetailsComponentComponent;
  let fixture: ComponentFixture<ProductDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], // Use HttpClientTestingModule
             declarations: [ ProductDetailsComponentComponent ],
             providers: [ {
              provide: ActivatedRoute,
              useValue: {
                // Mocking route params, you can adjust based on your usage in the component
                snapshot: {
                  paramMap: {
                    get: (param: string) => 'mockId' // Adjust as necessary based on your test
                  }
                },
                // Or mock query params if necessary
                queryParams: of({}),
              }
            },ProductServiceService,
              
             ],
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
