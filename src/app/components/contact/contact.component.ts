import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '../translation.pipe';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslatePipe, InputTextModule, TextareaModule, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = 'kenysonoliveira@gmail.com';
  phone = '+39 392 887 6051';
  githubUrl = 'https://github.com/Kenyson';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;

      setTimeout(() => {
        alert(`Thank you, ${this.formData.name}! Your message has been received. I'll get back to you at ${this.formData.email} soon.`);
        this.formData = { name: '', email: '', message: '' };
        this.isSubmitting = false;
      }, 1500);
    }
  }
}
