import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingProvidersComponent } from './getting-providers.component';

describe('GettingProvidersComponent', () => {
  let component: GettingProvidersComponent;
  let fixture: ComponentFixture<GettingProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettingProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
