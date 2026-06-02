import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { SkillDemo } from '../../models/skill.model';
import { SKILLS_DATA } from '../../data/skills.data';

@Component({
  selector: 'app-skills2',
  standalone: true,
  imports: [
    CommonModule,
    TranslatePipe
  ],
  templateUrl: './skills2.component.html',
  styleUrl: './skills2.component.css'
})
export class Skills2Component {
  // Data from separate file
  skills: SkillDemo[] = SKILLS_DATA;

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
}