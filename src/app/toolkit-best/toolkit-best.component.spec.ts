import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitBestComponent } from './toolkit-best.component';

describe('ToolkitBestComponent', () => {
  let component: ToolkitBestComponent;
  let fixture: ComponentFixture<ToolkitBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolkitBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
