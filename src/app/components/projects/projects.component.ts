import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'PMS - Prescription Management System',
      description: 'Projeto universitário - Uma aplicação abrangente de gerenciamento de prescrições com autenticação de usuário, permitindo que médicos criem, gerenciem e acompanham prescrições de pacientes com segurança.',
      technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Kenyson/Meu-TCC/tree/main/pms',
      demo: 'https://kenyson.github.io/PMS/',
      image: 'assets/pms_img.png',
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