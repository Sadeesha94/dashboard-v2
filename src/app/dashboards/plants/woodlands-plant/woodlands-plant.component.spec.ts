import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodlandsPlantComponent } from './woodlands-plant.component';

describe('WoodlandsPlantComponent', () => {
  let component: WoodlandsPlantComponent;
  let fixture: ComponentFixture<WoodlandsPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodlandsPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodlandsPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
