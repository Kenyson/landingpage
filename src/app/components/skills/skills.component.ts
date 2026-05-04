import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillDemo } from '../../models/skill.model';
import { SKILLS_DATA } from '../../data/skills.data';
import { JavaScriptDemoComponent } from './demos/javascript-demo/javascript-demo.component';
import { TypeScriptDemoComponent } from './demos/typescript-demo/typescript-demo.component';
import { Html5DemoComponent } from './demos/html5-demo/html5-demo.component';
import { Css3DemoComponent } from './demos/css3-demo/css3-demo.component';
import { BootstrapDemoComponent } from './demos/bootstrap-demo/bootstrap-demo.component';
import { AngularDemoComponent } from './demos/angular-demo/angular-demo.component';
import { GitDemoComponent } from './demos/git-demo/git-demo.component';
import { VscodeDemoComponent } from './demos/vscode-demo/vscode-demo.component';
import { PrimengDemoComponent } from './demos/primeng-demo/primeng-demo.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslatePipe,
    DialogModule,
    ButtonModule,
    JavaScriptDemoComponent,
    AngularDemoComponent,
    TypeScriptDemoComponent,
    Html5DemoComponent,
    Css3DemoComponent,
    BootstrapDemoComponent,
    GitDemoComponent,
    VscodeDemoComponent,
    PrimengDemoComponent
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // Data from separate file
  skills: SkillDemo[] = SKILLS_DATA;

  // UI state
  selectedSkill: SkillDemo | null = null;
  exampleModalVisible = false;
  selectedExample: { title: string; description: string; code?: string; readme?: { objective: string; prerequisites: string; howToRun: string; tips: string } } | null = null;

  // Computed properties
  skillCategories = [
    { name: 'Languages', key: 'Languages' },
    { name: 'Frontend Frameworks', key: 'Frontend' },
    { name: 'Tools & Platforms', key: 'Tools' },
  ];

  getSkillsByCategory(category: string): SkillDemo[] {
    return this.skills.filter(s => s.category === category);
  }



  getCategoryLabel(key: string): string {
    const labels: Record<string, string> = {
      'Languages': 'Linguagens',
      'Frontend': 'Frameworks Frontend',
      'Tools': 'Ferramentas e Plataformas'
    };
    return labels[key] || key;
  }



  getProjectsUsingSkill(skillName: string): string[] {
    const projects = {
      'JavaScript': ['Sistema de Prescrição Médica', 'Calculadora Web'],
      'TypeScript': ['DUIMP Interface', 'Sistema de Gestão'],
      'HTML5': ['Portfolio Pessoal', 'Landing Pages'],
      'CSS3': ['Interfaces Responsivas', 'Animações Avançadas'],
      'Angular': ['DUIMP Interface', 'Sistema de Gestão', 'Portfolio'],
      'Bootstrap': ['Sistema de Gestão', 'Landing Pages'],
      'PrimeNG': ['Este Portfolio', 'Sistema de Gestão'],
      'Git': ['Todos os Projetos', 'Controle de Versão'],
      'VS Code': ['Desenvolvimento Diário', 'Debugging']
    };

    return projects[skillName as keyof typeof projects] || [];
  }

  // Skill selection methods
  selectSkill(skill: SkillDemo) {
    this.selectedSkill = skill;
  }

  closeSkillDetail() {
    this.selectedSkill = null;
  }

  openExampleModal(example: { title: string; description: string; code?: string }) {
    this.selectedExample = example;
    this.exampleModalVisible = true;
  }

  closeExampleModal() {
    this.exampleModalVisible = false;
    this.selectedExample = null;
  }

  isSkillSelected(skill: SkillDemo): boolean {
    return this.selectedSkill?.name === skill.name;
  }
}