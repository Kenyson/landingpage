import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../translation.pipe';
import { TranslationService } from '../translation.service';
import { ThemeService } from '../theme.service';
import { Language } from '../portfolio-translations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
  langMenuOpen = signal(false);

  constructor(
    public translationService: TranslationService,
    public themeService: ThemeService
  ) {
    this.translationService.initializeLanguage();
  }

  get currentTheme(): string {
    return this.themeService.currentTheme();
  }

  toggleMenu() {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
    if (this.langMenuOpen()) {
      this.langMenuOpen.set(false);
    }
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  toggleLangMenu() {
    this.langMenuOpen.set(!this.langMenuOpen());
  }

  selectLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.langMenuOpen.set(false);
  }

  getCurrentFlag(): string {
    const current = this.translationService.currentLanguage();
    const lang = this.translationService.availableLanguages.find(l => l.code === current);
    return lang ? lang.flag : '🇺🇸';
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getThemeLabel(): string {
    // Get the current translations and return the appropriate label
    const translations = this.translationService.currentLanguageData;
    return this.themeService.currentTheme() === 'dark'
      ? translations.theme.toggleLight
      : translations.theme.toggleDark;
  }
}
