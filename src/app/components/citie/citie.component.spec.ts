import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitieComponent } from './citie.component';

describe('CitieComponent', () => {
  let component: CitieComponent;
  let fixture: ComponentFixture<CitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
