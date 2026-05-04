import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../translation.pipe';

@Component({
  selector: 'app-javascript-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './javascript-demo.component.html',
  styleUrls: ['./javascript-demo.component.css']
})
export class JavaScriptDemoComponent {
  jsInput = '';
  fibResult: number | null = null;
  fibLoading = false;

  fibonacciExamples = [
    { n: 0, result: 0 },
    { n: 1, result: 1 },
    { n: 2, result: 1 },
    { n: 3, result: 2 },
    { n: 4, result: 3 },
    { n: 5, result: 5 },
    { n: 6, result: 8 }
  ];

  get currentInputNumber(): number {
    return parseInt(this.jsInput) || 0;
  }

  calculateFibonacci() {
    const n = parseInt(this.jsInput);
    if (isNaN(n) || n < 0 || n > 20) {
      alert('Digite um número entre 0 e 20');
      return;
    }

    this.fibLoading = true;
    this.fibResult = null;

    setTimeout(() => {
      this.fibResult = this.fibonacci(n);
      this.fibLoading = false;
    }, 500);
  }

  private fibonacci(n: number): number {
    if (n <= 1) return n;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  getFibonacciSequence(n: number): string {
    if (n <= 0 || isNaN(n)) return '0';

    const sequence = [];
    for (let i = 0; i <= n; i++) {
      sequence.push(this.fibonacci(i));
    }
    return sequence.join(', ');
  }
}
