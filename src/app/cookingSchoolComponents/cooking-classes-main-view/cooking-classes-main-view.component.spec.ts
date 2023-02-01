import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingClassesMainViewComponent } from './cooking-classes-main-view.component';

describe('CookingClassesMainViewComponent', () => {
  let component: CookingClassesMainViewComponent;
  let fixture: ComponentFixture<CookingClassesMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookingClassesMainViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookingClassesMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
