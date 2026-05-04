import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../translation.pipe';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe, ButtonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {}
