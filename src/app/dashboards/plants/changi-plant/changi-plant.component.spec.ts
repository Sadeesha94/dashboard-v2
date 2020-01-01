import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangiPlantComponent } from './changi-plant.component';

describe('ChangiPlantComponent', () => {
  let component: ChangiPlantComponent;
  let fixture: ComponentFixture<ChangiPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangiPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangiPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
