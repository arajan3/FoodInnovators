import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlider1Component } from './test-slider1.component';

describe('TestSlider1Component', () => {
  let component: TestSlider1Component;
  let fixture: ComponentFixture<TestSlider1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSlider1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSlider1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
