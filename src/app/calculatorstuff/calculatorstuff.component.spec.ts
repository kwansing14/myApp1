import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorstuffComponent } from './calculatorstuff.component';

describe('CalculatorstuffComponent', () => {
  let component: CalculatorstuffComponent;
  let fixture: ComponentFixture<CalculatorstuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorstuffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
