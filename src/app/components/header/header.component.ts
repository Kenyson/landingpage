import { Component, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../translation.pipe';
import { ThemeService } from '../theme.service';
import { TranslationService } from '../translation.service';
import { Language } from '../portfolio-translations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements AfterViewInit {
  mobileMenuOpen = signal(false);
  langMenuOpen = signal(false);
  activeSection = signal('home');

  @ViewChild('langMenuBtn') langMenuBtn!: ElementRef;
  @ViewChild('langMenu') langMenu!: ElementRef;

  private sections = ['home', 'about', 'skills2', 'experience', 'projects', 'contact'];

  constructor(public themeService: ThemeService, public translationService: TranslationService) {
    this.setupScrollSpy();
    this.translationService.initializeLanguage();
  }

  get currentTheme(): string {
    return this.themeService.currentTheme();
  }

  isSectionActive(section: string): boolean {
    return this.activeSection() === section;
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

  scrollToSection(sectionId: string) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleLangMenu(): void {
    this.langMenuOpen.set(!this.langMenuOpen());
    if (this.langMenuOpen() && this.langMenuBtn && this.langMenu) {
      setTimeout(() => {
        const btn = this.langMenuBtn.nativeElement;
        const menu = this.langMenu.nativeElement;
        const rect = btn.getBoundingClientRect();
        menu.style.top = `${rect.bottom + 5}px`;
        menu.style.right = `${window.innerWidth - rect.right}px`;
      });
    }
  }

  setLanguage(langCode: string): void {
    this.translationService.setLanguage(langCode as any);
    this.langMenuOpen.set(false);
  }

  getResumePath(): string {
    const lang = this.translationService.currentLanguage();
    const fileMap: Record<Language, string> = {
      pt: 'assets/CV_Kenyson_Oliveira_loureiro_pt.pdf',
      it: 'assets/CV_Kenyson_Oliveira_loureiro_it.pdf',
      en: 'assets/CV_Kenyson_Oliveira_loureiro_en.pdf'
    };
    return fileMap[lang] || fileMap.en;
  }

  ngAfterViewInit() {
    // Initial positioning
  }

  private setupScrollSpy() {
    let ticking = false;
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of this.sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            this.activeSection.set(section);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    updateActiveSection();
  }
}
