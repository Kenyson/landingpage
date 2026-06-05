import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  get submitLabel(): string {
    return this.isSubmitting ? this.translationService.translate('contact.form.sending') : this.translationService.translate('contact.form.send');
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isSubmitting = true;

       // EmailJS configuration - REPLACE THESE WITH YOUR ACTUAL VALUES FROM EMAILJS.COM
       const emailjsServiceID = 'service_cdd7v6s';
       const emailjsTemplateID = 'template_cxvpkit';
       const emailjsUserID = 'rgEv0LJImsBooayIc';

      // Telegram configuration - ALREADY SET FROM PREVIOUS CONFIGURATION
      const telegramBotToken = '8837367466:AAEsYl3g-_OlAt_zdLUXn9IJuTyQat-hcIA';
      const telegramChatID = '8801224465';

       // Prepare email data for EmailJS
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

       // Prepare Telegram message
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

       // Send email (primary)
       this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailData, { responseType: 'text' })
         .toPromise()
         .then(() => {
           // Email succeeded - send Telegram in background (non-blocking)
           this.http.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, telegramData)
             .toPromise()
             .then(() => {
               console.log('Telegram notification sent successfully');
             })
             .catch((telegramError) => {
               console.warn('Telegram notification failed (non-critical):', telegramError);
             });

           // Show success since email worked
           alert(this.translationService.translate('contact.success', { name: this.formData.name, email: this.formData.email }));
           this.formData = { name: '', email: '', message: '' };
           this.isSubmitting = false;
         })
         .catch((emailError) => {
           // Email failed
           console.error('Email sending failed:', emailError);
           alert(this.translationService.translate('contact.error'));
           this.isSubmitting = false;
         });
    }
  }
}
