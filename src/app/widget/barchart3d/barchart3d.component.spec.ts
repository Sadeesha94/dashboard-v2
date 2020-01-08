import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Barchart3dComponent } from './barchart3d.component';

describe('Barchart3dComponent', () => {
  let component: Barchart3dComponent;
  let fixture: ComponentFixture<Barchart3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Barchart3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Barchart3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
