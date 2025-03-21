import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
       imports: [HttpClientTestingModule], // Use HttpClientTestingModule
             declarations: [ AccountComponent ],
             providers: [
              {
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
              },
              ProductServiceService],
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
