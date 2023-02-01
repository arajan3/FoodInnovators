import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoCardsComponent } from './what-we-do-cards.component';

describe('WhatWeDoCardsComponent', () => {
  let component: WhatWeDoCardsComponent;
  let fixture: ComponentFixture<WhatWeDoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatWeDoCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatWeDoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
