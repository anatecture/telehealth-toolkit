import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitMarketingComponent } from './toolkit-marketing.component';

describe('ToolkitMarketingComponent', () => {
  let component: ToolkitMarketingComponent;
  let fixture: ComponentFixture<ToolkitMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
