import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { Skills2Component } from "./components/skills2/skills2.component";
import { SlideAnimationDirective } from './directives/slide-animation.directive';

@Component({
  selector: 'app-root',
  imports: [
    SlideAnimationDirective,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    Skills2Component
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
