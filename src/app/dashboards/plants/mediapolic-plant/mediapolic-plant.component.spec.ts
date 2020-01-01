import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediapolicPlantComponent } from './mediapolic-plant.component';

describe('MediapolicPlantComponent', () => {
  let component: MediapolicPlantComponent;
  let fixture: ComponentFixture<MediapolicPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediapolicPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediapolicPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
