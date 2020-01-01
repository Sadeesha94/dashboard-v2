import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiopolisPlantComponent } from './biopolis-plant.component';

describe('BiopolisPlantComponent', () => {
  let component: BiopolisPlantComponent;
  let fixture: ComponentFixture<BiopolisPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiopolisPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiopolisPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
