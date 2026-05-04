import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { Experience } from '../portfolio-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Front-End Developer',
      company: 'NTT DATA Business Solutions (ex Conexos)',
      period: 'September 2023 – Present',
      location: 'Remote',
      type: 'Full-time',
      responsibilities: [
        'Front-end development with AngularJS and Angular 19',
        'Migration of architecture and introduction of TypeScript',
        'Responsible for the new main menu of the system',
        'Development of the DUIMP (Single Document for Importation) interface',
        'Use of Bootstrap, TailwindCSS and REST API consumption',
        'Workflow with Git, Jira and Jenkins',
      ],
      technologies: ['AngularJS', 'Angular 19', 'TypeScript', 'Bootstrap', 'TailwindCSS', 'Git', 'Jira', 'Jenkins'],
    },
    {
      role: 'Front-End Developer – Internship',
      company: 'Conexos',
      period: 'September 2022 – September 2023',
      location: 'Vitória (ES), Brazil',
      type: 'Internship',
      responsibilities: [
        'Development with AngularJS, HTML, CSS, JavaScript',
        'UI implementation with Bootstrap',
        'General team support and bug fixing',
      ],
      technologies: ['AngularJS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    },
  ];

  getExperienceType(type: string): string {
    return type === 'Full-time' ? 'experience.present' : 'experience.internship';
  }
}
