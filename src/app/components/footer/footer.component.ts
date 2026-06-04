import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  githubUrl = 'https://github.com/Kenyson';
  linkedinUrl = 'https://www.linkedin.com/in/kenyson-oliveira-loureiro-80a48a222';
}
