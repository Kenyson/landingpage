import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  private baseHref = inject(APP_BASE_HREF);

  getAssetPath(filename: string): string {
    return `${this.baseHref}assets/${filename}`;
  }

  projects: any[] = [];

  ngOnInit() {
    this.projects = [
      {
        title: 'PMS - Prescription Management System',
        description: 'Projeto universitário - Uma aplicação abrangente de gerenciamento de prescrições com autenticação de usuário, permitindo que médicos criem, gerenciem e acompanham prescrições de pacientes com segurança.',
        technologies: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript'],
        github: 'https://github.com/Kenyson/Meu-TCC/tree/main/pms',
        demo: 'https://kenyson.github.io/PMS/',
        image: this.getAssetPath('pms_img.png'),
      },
    ];
  }
}