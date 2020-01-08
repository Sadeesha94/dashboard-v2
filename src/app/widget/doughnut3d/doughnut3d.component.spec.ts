import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Doughnut3dComponent } from './doughnut3d.component';

describe('Doughnut3dComponent', () => {
  let component: Doughnut3dComponent;
  let fixture: ComponentFixture<Doughnut3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Doughnut3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Doughnut3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
