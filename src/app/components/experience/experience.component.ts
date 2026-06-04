import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
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
      role: 'Front-End Developer',
      company: 'NTT DATA Business Solutions (ex Conexos)',
      period: 'Setembro 2023 – Maio 2026',
      location: 'Remoto',
      type: 'Full-time',
      responsibilities: [
        'Sviluppo di nuove funzionalità con Angular e AngularJS',
        'Partecipazione alla migrazione tecnologica da JavaScript a TypeScript',
        'Realizzazione del nuovo menu principale dell\'applicazione',
        'Sviluppo dell\'interfaccia utente per il progetto DUIMP (Documento Unico di Importazione)',
        'Integrazione con API REST',
        'Implementazione di componenti responsive tramite Bootstrap e Tailwind CSS',
        'Collaborazione con team multidisciplinari seguendo metodologie Agile',
      ],
      technologies: ['Angular', 'AngularJS', 'TypeScript', 'Bootstrap', 'TailwindCSS', 'Git', 'Jira', 'Jenkins', 'RxJS'],
    },
    {
      role: 'Front-End Developer Intern',
      company: 'Conexos',
      period: 'Setembro 2022 – Setembro 2023',
      location: 'Vitória (ES), Brazil',
      type: 'Internship',
      responsibilities: [
        'Sviluppo e manutenzione di funzionalità web utilizzando AngularJS',
        'Implementazione di interfacce responsive',
        'Correzione bug e manutenzione evolutiva',
        'Supporto al team di sviluppo nelle attività quotidiane',
      ],
      technologies: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    },
  ];
}