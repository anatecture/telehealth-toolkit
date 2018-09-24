import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitResourcesComponent } from './toolkit-resources.component';

describe('ToolkitResourcesComponent', () => {
  let component: ToolkitResourcesComponent;
  let fixture: ComponentFixture<ToolkitResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
