import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitStaffComponent } from './toolkit-staff.component';

describe('ToolkitStaffComponent', () => {
  let component: ToolkitStaffComponent;
  let fixture: ComponentFixture<ToolkitStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
