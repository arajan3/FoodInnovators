import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodiesWorkshopComponent } from './foodies-workshop.component';

describe('FoodiesWorkshopComponent', () => {
  let component: FoodiesWorkshopComponent;
  let fixture: ComponentFixture<FoodiesWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodiesWorkshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodiesWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
