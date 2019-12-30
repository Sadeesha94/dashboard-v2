import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallBillingComponent } from './overall-billing.component';

describe('OverallBillingComponent', () => {
  let component: OverallBillingComponent;
  let fixture: ComponentFixture<OverallBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
