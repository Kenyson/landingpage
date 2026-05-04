import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../../../translation.pipe';

interface Html5FormData {
  name: string;
  email: string;
  age: string;
  message: string;
}

@Component({
  selector: 'app-html5-demo',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe],
  templateUrl: './html5-demo.component.html',
  styleUrls: ['./html5-demo.component.css']
})
export class Html5DemoComponent {
  formData: Html5FormData = {
    name: '',
    email: '',
    age: '',
    message: ''
  };

  showSuccessMessage = false;
  submittedData: Html5FormData | null = null;

  submitForm() {
    if (this.isFormValid()) {
      this.submittedData = { ...this.formData };
      this.showSuccessMessage = true;

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      age: '',
      message: ''
    };
    this.showSuccessMessage = false;
    this.submittedData = null;
  }

  private isFormValid(): boolean {
    const { name, email, age, message } = this.formData;

    // Basic validation
    if (!name.trim() || name.length < 2 || name.length > 50) return false;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false;

    const ageNum = parseInt(age);
    if (!age || isNaN(ageNum) || ageNum < 18 || ageNum > 120) return false;

    if (!message.trim() || message.length < 10 || message.length > 500) return false;

    return true;
  }
}
