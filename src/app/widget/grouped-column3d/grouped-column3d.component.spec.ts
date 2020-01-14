import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedColumn3dComponent } from './grouped-column3d.component';

describe('GroupedColumn3dComponent', () => {
  let component: GroupedColumn3dComponent;
  let fixture: ComponentFixture<GroupedColumn3dComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedColumn3dComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedColumn3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
