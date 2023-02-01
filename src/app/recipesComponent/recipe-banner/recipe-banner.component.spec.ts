import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeBannerComponent } from './recipe-banner.component';

describe('RecipeBannerComponent', () => {
  let component: RecipeBannerComponent;
  let fixture: ComponentFixture<RecipeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
