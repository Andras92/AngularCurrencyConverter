import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFromComponent } from './currency-from.component';

describe('CurrencyFromComponent', () => {
  let component: CurrencyFromComponent;
  let fixture: ComponentFixture<CurrencyFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
