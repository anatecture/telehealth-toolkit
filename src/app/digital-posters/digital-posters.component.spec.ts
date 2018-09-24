import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalPostersComponent } from './digital-posters.component';

describe('DigitalPostersComponent', () => {
  let component: DigitalPostersComponent;
  let fixture: ComponentFixture<DigitalPostersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalPostersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalPostersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
