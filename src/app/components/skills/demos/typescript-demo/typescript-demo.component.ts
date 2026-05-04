import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../translation.pipe';

@Component({
  selector: 'app-typescript-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './typescript-demo.component.html',
  styleUrls: ['./typescript-demo.component.css']
})
export class TypeScriptDemoComponent {
  selectedType: 'string' | 'number' | 'email' | 'boolean' = 'string';
  inputValue = '';
  validationMessage = '';

  setType(type: 'string' | 'number' | 'email' | 'boolean') {
    this.selectedType = type;
    this.inputValue = '';
    this.validationMessage = '';
  }

  validateInput() {
    if (!this.inputValue.trim()) {
      this.validationMessage = 'Digite algo para validar';
      return;
    }

    switch (this.selectedType) {
      case 'number':
        const numValue = parseFloat(this.inputValue);
        if (isNaN(numValue)) {
          this.validationMessage = `❌ "${this.inputValue}" não é um número válido`;
        } else {
          this.validationMessage = `✅ Número válido: ${numValue}`;
        }
        break;

      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.inputValue)) {
          this.validationMessage = `✅ Email válido: ${this.inputValue}`;
        } else {
          this.validationMessage = `❌ Email inválido: ${this.inputValue}`;
        }
        break;

      case 'boolean':
        const lowerInput = this.inputValue.toLowerCase();
        if (['true', 'false', '1', '0', 'yes', 'no'].includes(lowerInput)) {
          const boolValue = ['true', '1', 'yes'].includes(lowerInput);
          this.validationMessage = `✅ Booleano: ${boolValue} (${this.inputValue})`;
        } else {
          this.validationMessage = `❌ Não é um valor booleano válido: ${this.inputValue}`;
        }
        break;

      default: // string
        if (this.inputValue.length > 0) {
          this.validationMessage = `✅ String válido: "${this.inputValue}" (comprimento: ${this.inputValue.length})`;
        } else {
          this.validationMessage = 'String vazia';
        }
    }
  }

  getValidationClass(): string {
    if (!this.validationMessage) return '';
    return this.validationMessage.startsWith('✅') ? 'valid' : 'invalid';
  }
}
