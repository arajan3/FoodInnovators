import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheTeamCardsComponent } from './meet-the-team-cards.component';

describe('MeetTheTeamCardsComponent', () => {
  let component: MeetTheTeamCardsComponent;
  let fixture: ComponentFixture<MeetTheTeamCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetTheTeamCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetTheTeamCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
