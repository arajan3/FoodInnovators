import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingSchoolSlidesComponent } from './cooking-school-slides.component';

describe('CookingSchoolSlidesComponent', () => {
  let component: CookingSchoolSlidesComponent;
  let fixture: ComponentFixture<CookingSchoolSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingSchoolSlidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingSchoolSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
