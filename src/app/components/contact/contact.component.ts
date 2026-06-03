import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '../translation.pipe';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, TextareaModule, ButtonModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(public translationService: TranslationService) {}
  email = 'kenysonoliveira@gmail.com';
  phone = '+39 392 887 6051';
  githubUrl = 'https://github.com/Kenyson';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;

  get submitLabel(): string {
    return this.isSubmitting ? this.translationService.translate('contact.form.sending') : this.translationService.translate('contact.form.send');
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;

      setTimeout(() => {
        alert(this.translationService.translate('contact.success', { name: this.formData.name, email: this.formData.email }));
        this.formData = { name: '', email: '', message: '' };
        this.isSubmitting = false;
      }, 1500);
    }
  }
}