import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitMarketingDigitalComponent } from './toolkit-marketing-digital.component';

describe('ToolkitMarketingDigitalComponent', () => {
  let component: ToolkitMarketingDigitalComponent;
  let fixture: ComponentFixture<ToolkitMarketingDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitMarketingDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitMarketingDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
