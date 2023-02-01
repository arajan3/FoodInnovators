import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingClassesComponent } from './cooking-classes.component';

describe('CookingClassesComponent', () => {
  let component: CookingClassesComponent;
  let fixture: ComponentFixture<CookingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
