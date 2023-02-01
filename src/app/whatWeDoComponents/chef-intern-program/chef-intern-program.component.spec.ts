import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefInternProgramComponent } from './chef-intern-program.component';

describe('ChefInternProgramComponent', () => {
  let component: ChefInternProgramComponent;
  let fixture: ComponentFixture<ChefInternProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefInternProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefInternProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
