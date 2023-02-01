import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFirstCardComponent } from './home-first-card.component';

describe('HomeFirstCardComponent', () => {
  let component: HomeFirstCardComponent;
  let fixture: ComponentFixture<HomeFirstCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFirstCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFirstCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
