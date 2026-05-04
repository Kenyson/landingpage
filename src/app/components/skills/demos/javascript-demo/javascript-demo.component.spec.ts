import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { JavaScriptDemoComponent } from './javascript-demo.component';

describe('JavaScriptDemoComponent', () => {
  let component: JavaScriptDemoComponent;
  let fixture: ComponentFixture<JavaScriptDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaScriptDemoComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaScriptDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty input and null result', () => {
    expect(component.jsInput).toBe('');
    expect(component.fibResult).toBeNull();
    expect(component.fibLoading).toBeFalse();
  });

  it('should initialize with empty input and null result', () => {
    expect(component.jsInput).toBe('');
    expect(component.fibResult).toBeNull();
    expect(component.fibLoading).toBe(false);
  });

  it('should calculate fibonacci correctly for n=0', () => {
    component.jsInput = '0';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(0);
  });

  it('should calculate fibonacci correctly for n=1', () => {
    component.jsInput = '1';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(1);
  });

  it('should calculate fibonacci correctly for n=5', () => {
    component.jsInput = '5';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(5); // 0, 1, 1, 2, 3, 5
  });

  it('should calculate fibonacci correctly for n=10', () => {
    component.jsInput = '10';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(55);
  });

  it('should calculate fibonacci correctly for n=5', () => {
    component.jsInput = '5';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(5);
  });

  it('should calculate fibonacci correctly for n=10', () => {
    component.jsInput = '10';
    component.calculateFibonacci();
    expect(component.fibResult).toBe(55);
  });

  it('should handle fibonacci calculation for edge cases', () => {
    // Test the private method directly for better coverage
    expect(component['fibonacci'](0)).toBe(0);
    expect(component['fibonacci'](1)).toBe(1);
    expect(component['fibonacci'](2)).toBe(1);
    expect(component['fibonacci'](3)).toBe(2);
    expect(component['fibonacci'](4)).toBe(3);
    expect(component['fibonacci'](6)).toBe(8);
  });
});