import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Desenvolvedor Front-End',
      company: 'NTT DATA Business Solutions (ex Conexos)',
      period: 'Setembro 2023 – Presente',
      location: 'Remoto',
      type: 'Full-time',
      responsibilities: [
        'Desenvolvimento front-end com AngularJS e Angular 19',
        'Migração da arquitetura e introdução de TypeScript',
        'Responsável pelo novo menu principal do sistema',
        'Desenvolvimento da interface DUIMP (Documento Único de Importação)',
        'Uso de Bootstrap, TailwindCSS e consumo de API REST',
        'Workflow com Git, Jira e Jenkins',
      ],
      technologies: ['AngularJS', 'Angular 19', 'TypeScript', 'Bootstrap', 'TailwindCSS', 'Git', 'Jira', 'Jenkins'],
    },
    {
      role: 'Desenvolvedor Front-End – Estágio',
      company: 'Conexos',
      period: 'Setembro 2022 – Setembro 2023',
      location: 'Vitória (ES), Brazil',
      type: 'Internship',
      responsibilities: [
        'Desenvolvimento com AngularJS, HTML, CSS, JavaScript',
        'Implementação de UI com Bootstrap',
        'Suporte geral ao time e correção de bugs',
      ],
      technologies: ['AngularJS', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    },
  ];
}