import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSchoolComponent } from './cooking-school.component';

describe('CookingSchoolComponent', () => {
  let component: CookingSchoolComponent;
  let fixture: ComponentFixture<CookingSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
