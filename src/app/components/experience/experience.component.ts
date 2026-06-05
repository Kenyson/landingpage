import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { TranslationService } from '../translation.service';
import { SlideAnimationDirective } from '../../directives/slide-animation.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe, SlideAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      key: 'nttData',
      type: 'Full-time',
      technologies: ['Angular', 'AngularJS', 'TypeScript', 'Bootstrap', 'TailwindCSS', 'Git', 'Jira', 'Jenkins'],
    },
    {
      key: 'conexosIntern',
      type: 'Internship',
      technologies: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
  ];

  constructor(public translationService: TranslationService) {}

  getResponsibilities(key: string): string[] {
    const resp = this.translationService.translate('experience.items.' + key + '.responsibilities');
    return Array.isArray(resp) ? resp : [];
  }
}
