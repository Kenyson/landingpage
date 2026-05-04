import { Component, signal, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../translation.pipe';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

interface ReactiveFormData {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
  newsletter: boolean;
}

@Component({
  selector: 'app-angular-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TranslatePipe],
  templateUrl: './angular-demo.component.html',
  styleUrls: ['./angular-demo.component.css']
})
export class AngularDemoComponent {
  private fb = inject(FormBuilder);

  // Signals
  counter = signal(0);
  doubleCounter = computed(() => this.counter() * 2);
  squareCounter = computed(() => this.counter() * this.counter());

  counterStatus = computed(() => {
    const value = this.counter();
    if (value === 0) return 'Zero';
    if (value > 0) return 'Positivo';
    return 'Negativo';
  });

  counterStatusClass = computed(() => {
    const status = this.counterStatus();
    switch (status) {
      case 'Positivo': return 'positive';
      case 'Negativo': return 'negative';
      default: return 'neutral';
    }
  });

  // Task Manager
  tasks = signal<Task[]>([]);
  newTaskTitle = '';
  newTaskPriority: 'low' | 'medium' | 'high' = 'medium';
  showTaskSuccess = false;
  lastAddedTask = '';

  pendingTasks = computed(() => this.tasks().filter(t => !t.completed).length);
  completedTasks = computed(() => this.tasks().filter(t => t.completed).length);

  // Reactive Forms
  reactiveForm: FormGroup;
  showFormSuccess = false;

  constructor() {
    // Reactive Form setup
    this.reactiveForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)/)]],
      confirmPassword: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]],
      newsletter: [false]
    }, {
      validators: this.passwordMatchValidator
    });

    // Effects for logging (removed console.log as requested)
  }

  // Counter methods
  incrementCounter() {
    this.counter.update(v => v + 1);
  }

  decrementCounter() {
    this.counter.update(v => Math.max(0, v - 1));
  }

  // Task methods
  addTask() {
    if (this.newTaskTitle.trim().length >= 3) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        completed: false,
        priority: this.newTaskPriority,
        createdAt: new Date()
      };

      this.tasks.update(tasks => [...tasks, newTask]);
      this.lastAddedTask = this.newTaskTitle.trim();
      this.newTaskTitle = '';
      this.newTaskPriority = 'medium';

      this.showTaskSuccess = true;
      setTimeout(() => this.showTaskSuccess = false, 2000);
    }
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  removeTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  trackByTaskId(index: number, task: Task) {
    return task.id;
  }

  getPriorityLabel(priority: string): string {
    const labels = { low: 'Baixa', medium: 'Média', high: 'Alta' };
    return labels[priority as keyof typeof labels] || priority;
  }

  // Reactive Form methods
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    } else {
      const errors = confirmPassword?.errors;
      if (errors) {
        delete errors['passwordMismatch'];
        confirmPassword.setErrors(Object.keys(errors).length ? errors : null);
      }
    }
  }

  submitReactiveForm() {
    if (this.reactiveForm.valid) {
      const formData: ReactiveFormData = this.reactiveForm.value;
      // Form submitted successfully (removed console.log as requested)

      this.showFormSuccess = true;
      setTimeout(() => this.showFormSuccess = false, 3000);

      // Reset form
      this.resetReactiveForm();
    }
  }

  resetReactiveForm() {
    this.reactiveForm.reset({
      email: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false,
      newsletter: false
    });
  }

  getTouchedFieldsCount(): number {
    return Object.values(this.reactiveForm.controls).filter(control => control.touched).length;
  }

  getDirtyFieldsCount(): number {
    return Object.values(this.reactiveForm.controls).filter(control => control.dirty).length;
  }
}
