import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularDemoComponent } from './angular-demo.component';

describe('AngularDemoComponent', () => {
  let component: AngularDemoComponent;
  let fixture: ComponentFixture<AngularDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDemoComponent, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with counter at 0', () => {
    expect(component.counter()).toBe(0);
  });

  it('should increment counter', () => {
    component.incrementCounter();
    expect(component.counter()).toBe(1);
  });

  it('should decrement counter', () => {
    component.counter.set(5);
    component.decrementCounter();
    expect(component.counter()).toBe(4);
  });

  it('should not decrement below 0', () => {
    component.counter.set(0);
    component.decrementCounter();
    expect(component.counter()).toBe(0);
  });

  it('should calculate double counter correctly', () => {
    component.counter.set(3);
    expect(component.doubleCounter()).toBe(6);
  });

  it('should calculate square counter correctly', () => {
    component.counter.set(4);
    expect(component.squareCounter()).toBe(16);
  });

  it('should return correct counter status', () => {
    component.counter.set(0);
    expect(component.counterStatus()).toBe('Zero');

    component.counter.set(5);
    expect(component.counterStatus()).toBe('Positivo');

    component.counter.set(-3);
    expect(component.counterStatus()).toBe('Negativo');
  });

  it('should initialize reactive form', () => {
    expect(component.reactiveForm).toBeTruthy();
    expect(component.reactiveForm.get('email')).toBeTruthy();
    expect(component.reactiveForm.get('password')).toBeTruthy();
    expect(component.reactiveForm.get('confirmPassword')).toBeTruthy();
    expect(component.reactiveForm.get('agreeToTerms')).toBeTruthy();
    expect(component.reactiveForm.get('newsletter')).toBeTruthy();
  });

  it('should validate email field as required', () => {
    const emailControl = component.reactiveForm.get('email');
    emailControl?.setValue('');
    emailControl?.markAsTouched();
    expect(emailControl?.errors?.['required']).toBeTruthy();
  });

  it('should validate password requirements', () => {
    const passwordControl = component.reactiveForm.get('password');
    passwordControl?.setValue('123');
    passwordControl?.markAsTouched();
    expect(passwordControl?.errors?.['minlength']).toBeTruthy();
  });

  it('should validate terms agreement', () => {
    const termsControl = component.reactiveForm.get('agreeToTerms');
    termsControl?.setValue(false);
    termsControl?.markAsTouched();
    expect(termsControl?.errors?.['required']).toBeTruthy();
  });

  it('should initialize task manager', () => {
    expect(component.tasks()).toEqual([]);
    expect(component.newTaskTitle).toBe('');
    expect(component.newTaskPriority).toBe('medium');
  });

  it('should add task correctly', () => {
    component.newTaskTitle = 'Test Task';
    component.newTaskPriority = 'high';
    component.addTask();

    const tasks = component.tasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
    expect(tasks[0].priority).toBe('high');
    expect(tasks[0].completed).toBe(false);
  });

  it('should not add empty task', () => {
    component.newTaskTitle = '';
    component.addTask();
    expect(component.tasks().length).toBe(0);
  });

  it('should not add task with less than 3 characters', () => {
    component.newTaskTitle = 'Hi';
    component.addTask();
    expect(component.tasks().length).toBe(0);
  });

  it('should toggle task completion', () => {
    component.newTaskTitle = 'Test Task';
    component.addTask();

    const taskId = component.tasks()[0].id;
    component.toggleTask(taskId);

    expect(component.tasks()[0].completed).toBe(true);

    component.toggleTask(taskId);
    expect(component.tasks()[0].completed).toBe(false);
  });

  it('should remove task', () => {
    component.newTaskTitle = 'Test Task';
    component.addTask();

    const taskId = component.tasks()[0].id;
    component.removeTask(taskId);

    expect(component.tasks().length).toBe(0);
  });

  it('should return correct pending tasks count', () => {
    expect(component.pendingTasks()).toBe(0);

    component.newTaskTitle = 'Task 1';
    component.addTask();
    component.newTaskTitle = 'Task 2';
    component.addTask();

    expect(component.pendingTasks()).toBe(2);

    const taskId = component.tasks()[0].id;
    component.toggleTask(taskId);

    expect(component.pendingTasks()).toBe(1);
  });

  it('should return correct completed tasks count', () => {
    expect(component.completedTasks()).toBe(0);

    component.newTaskTitle = 'Task 1';
    component.addTask();
    component.newTaskTitle = 'Task 2';
    component.addTask();

    expect(component.completedTasks()).toBe(0);

    const taskId = component.tasks()[0].id;
    component.toggleTask(taskId);

    expect(component.completedTasks()).toBe(1);
  });

  it('should reset reactive form', () => {
    component.reactiveForm.get('email')?.setValue('test@example.com');
    component.reactiveForm.get('newsletter')?.setValue(true);

    component.resetReactiveForm();

    expect(component.reactiveForm.get('email')?.value).toBe('');
    expect(component.reactiveForm.get('newsletter')?.value).toBe(false);
  });

  it('should return correct touched fields count', () => {
    expect(component.getTouchedFieldsCount()).toBe(0);

    component.reactiveForm.get('email')?.markAsTouched();
    expect(component.getTouchedFieldsCount()).toBe(1);

    component.reactiveForm.get('password')?.markAsTouched();
    expect(component.getTouchedFieldsCount()).toBe(2);
  });

  it('should return correct dirty fields count', () => {
    expect(component.getDirtyFieldsCount()).toBe(0);

    component.reactiveForm.get('email')?.setValue('test@example.com');
    expect(component.getDirtyFieldsCount()).toBe(1);

    component.reactiveForm.get('password')?.setValue('password123');
    expect(component.getDirtyFieldsCount()).toBe(2);
  });
});