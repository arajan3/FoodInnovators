import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSecCardComponent } from './home-sec-card.component';

describe('HomeSecCardComponent', () => {
  let component: HomeSecCardComponent;
  let fixture: ComponentFixture<HomeSecCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSecCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSecCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
