import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenInspirationSessionComponent } from './kitchen-inspiration-session.component';

describe('KitchenInspirationSessionComponent', () => {
  let component: KitchenInspirationSessionComponent;
  let fixture: ComponentFixture<KitchenInspirationSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenInspirationSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenInspirationSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
