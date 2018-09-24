import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitExperienceHistoryComponent } from './toolkit-experience-history.component';

describe('ToolkitExperienceHistoryComponent', () => {
  let component: ToolkitExperienceHistoryComponent;
  let fixture: ComponentFixture<ToolkitExperienceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitExperienceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitExperienceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
