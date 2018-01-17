import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromActiveComponent } from './from-active.component';

describe('FromActiveComponent', () => {
  let component: FromActiveComponent;
  let fixture: ComponentFixture<FromActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
