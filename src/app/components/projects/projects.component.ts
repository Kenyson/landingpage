import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { ChipModule } from 'primeng/chip';
import { Project } from '../portfolio-data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe, ChipModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Medical Prescription System',
      description: 'University project - A comprehensive prescription management application with user authentication, allowing doctors to create, manage, and track patient prescriptions securely.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Kenyson',
      demo: 'https://github.com/Kenyson',
    },
    {
      title: 'DUIMP Interface',
      description: 'Critical business application developed at NTT DATA for managing the Single Document for Importation. Built with Angular 19, featuring complex forms and validation.',
      technologies: ['Angular 19', 'TypeScript', 'TailwindCSS', 'REST API', 'Bootstrap'],
      github: 'https://github.com/Kenyson',
    },
    {
      title: 'Enterprise Main Menu System',
      description: 'Modernized the main navigation system at NTT DATA, migrating from legacy AngularJS to modern Angular with TypeScript, improving performance and maintainability.',
      technologies: ['AngularJS', 'Angular', 'TypeScript', 'Git', 'Jenkins'],
      github: 'https://github.com/Kenyson',
    },
  ];
}
