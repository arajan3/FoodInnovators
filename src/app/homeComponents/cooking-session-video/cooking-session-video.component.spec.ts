import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSessionVideoComponent } from './cooking-session-video.component';

describe('CookingSessionVideoComponent', () => {
  let component: CookingSessionVideoComponent;
  let fixture: ComponentFixture<CookingSessionVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSessionVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingSessionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
