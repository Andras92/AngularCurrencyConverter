import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyToComponent } from './currency-to.component';

describe('CurrencyToComponent', () => {
  let component: CurrencyToComponent;
  let fixture: ComponentFixture<CurrencyToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
