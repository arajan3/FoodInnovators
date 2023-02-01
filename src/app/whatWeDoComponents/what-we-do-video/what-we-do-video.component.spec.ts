import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoVideoComponent } from './what-we-do-video.component';

describe('WhatWeDoVideoComponent', () => {
  let component: WhatWeDoVideoComponent;
  let fixture: ComponentFixture<WhatWeDoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeDoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
