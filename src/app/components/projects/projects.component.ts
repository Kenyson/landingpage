import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Sistema de Prescrição Médica',
      description: 'Projeto universitário - Uma aplicação abrangente de gerenciamento de prescrições com autenticação de usuário, permitindo que médicos criem, gerenciem e acompanhem prescrições de pacientes com segurança.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Kenyson',
    },
    {
      title: 'Interface DUIMP',
      description: 'Aplicação crítica de negócio desenvolvida na NTT DATA para gerenciar o Documento Único de Importação. Construída com Angular 19, apresentando formulários complexos e validação.',
      technologies: ['Angular 19', 'TypeScript', 'TailwindCSS', 'REST API', 'Bootstrap'],
      github: 'https://github.com/Kenyson',
    },
    {
      title: 'Sistema de Menu Principal Empresarial',
      description: 'Modernizei o sistema de navegação principal na NTT DATA, migrando do legado AngularJS para Angular moderno com TypeScript, melhorando performance e manutenibilidade.',
      technologies: ['AngularJS', 'Angular', 'TypeScript', 'Git', 'Jenkins'],
      github: 'https://github.com/Kenyson',
    },
  ];
}