import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCookingClassesComponent } from './more-cooking-classes.component';

describe('MoreCookingClassesComponent', () => {
  let component: MoreCookingClassesComponent;
  let fixture: ComponentFixture<MoreCookingClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreCookingClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCookingClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
