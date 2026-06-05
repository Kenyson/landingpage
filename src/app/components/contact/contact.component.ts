import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '../translation.pipe';
import { TranslationService } from '../translation.service';
import { SlideAnimationDirective } from '../../directives/slide-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, InputTextModule, TextareaModule, ButtonModule, TranslatePipe, SlideAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(public translationService: TranslationService, private http: HttpClient) {}
  email = 'kenysonoliveira@gmail.com';
  phone = '+39 392 887 6051';
  githubUrl = 'https://github.com/Kenyson';

  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  isSent = signal(false);

  onEmailInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.formData.email = input.value.replace(/\s+/g, '').toLowerCase();
  }

  get submitLabel(): string {
    if (this.isSent()) {
      return this.translationService.translate('contact.form.sent');
    }
    return this.isSubmitting ? this.translationService.translate('contact.form.sending') : this.translationService.translate('contact.form.send');
  }

  async onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;

    const emailjsServiceID = 'service_cdd7v6s';
    const emailjsTemplateID = 'template_cxvpkit';
    const emailjsUserID = 'rgEv0LJImsBooayIc';
    const telegramBotToken = '8837367466:AAEsYl3g-_OlAt_zdLUXn9IJuTyQat-hcIA';
    const telegramChatID = '8801224465';

    const emailBody = `Nome: ${this.formData.name}\nEmail: ${this.formData.email}\nMensagem:\n${this.formData.message}`;

    const emailData = {
      service_id: emailjsServiceID,
      template_id: emailjsTemplateID,
      user_id: emailjsUserID,
      template_params: {
        name: this.formData.name,
        email: this.formData.email,
        sender_email: this.formData.email,
        email_from: this.formData.email,
        message: emailBody,
        from_name: this.formData.name,
        reply_to: this.formData.email,
        subject: `Contact Us: ${this.formData.name}`
      }
    };

    const telegramMessage =
      `<b>Nova mensagem do formulário de contato</b>\n` +
      `<b>Nome:</b> ${this.formData.name}\n` +
      `<b>Email:</b> ${this.formData.email}\n` +
      `<b>Mensagem:</b>\n${this.formData.message}`;

    const telegramData = {
      chat_id: telegramChatID,
      text: telegramMessage,
      parse_mode: 'HTML'
    };

    try {
      const senderName = this.formData.name;
      const senderEmail = this.formData.email;

      await firstValueFrom(this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, { responseType: 'text' }));

      this.formData = { name: '', email: '', message: '' };

      alert(this.translationService.translate('contact.success', { name: senderName, email: senderEmail }));

      this.isSubmitting = false;
      this.isSent.set(true);

      setTimeout(() => {
        this.isSent.set(false);
      }, 3000);

      this.http.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, telegramData)
        .subscribe({
          next: () => console.log('Telegram notification sent successfully'),
          error: (telegramError) => console.warn('Telegram notification failed (non-critical):', telegramError)
        });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      alert(this.translationService.translate('contact.error'));
    } finally {
      this.isSubmitting = false;
    }
  }
}
