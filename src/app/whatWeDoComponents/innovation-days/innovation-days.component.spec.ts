import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationDaysComponent } from './innovation-days.component';

describe('InnovationDaysComponent', () => {
  let component: InnovationDaysComponent;
  let fixture: ComponentFixture<InnovationDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnovationDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovationDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
