import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Piechart3dComponent } from './piechart3d.component';

describe('Piechart3dComponent', () => {
  let component: Piechart3dComponent;
  let fixture: ComponentFixture<Piechart3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Piechart3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Piechart3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
