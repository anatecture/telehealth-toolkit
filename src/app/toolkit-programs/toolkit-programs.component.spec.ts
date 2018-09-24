import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitProgramsComponent } from './toolkit-programs.component';

describe('ToolkitProgramsComponent', () => {
  let component: ToolkitProgramsComponent;
  let fixture: ComponentFixture<ToolkitProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
