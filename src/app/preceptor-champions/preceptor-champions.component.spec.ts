import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreceptorChampionsComponent } from './preceptor-champions.component';

describe('PreceptorChampionsComponent', () => {
  let component: PreceptorChampionsComponent;
  let fixture: ComponentFixture<PreceptorChampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreceptorChampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreceptorChampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
