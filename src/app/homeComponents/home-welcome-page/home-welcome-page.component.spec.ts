import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWelcomePageComponent } from './home-welcome-page.component';

describe('HomeWelcomePageComponent', () => {
  let component: HomeWelcomePageComponent;
  let fixture: ComponentFixture<HomeWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeWelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
