import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeLinearComponent } from './gauge-linear.component';

describe('GaugeLinearComponent', () => {
  let component: GaugeLinearComponent;
  let fixture: ComponentFixture<GaugeLinearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeLinearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
