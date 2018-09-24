import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitExperienceComponent } from './toolkit-experience.component';

describe('ToolkitExperienceComponent', () => {
  let component: ToolkitExperienceComponent;
  let fixture: ComponentFixture<ToolkitExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
