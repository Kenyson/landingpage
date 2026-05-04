import { Injectable, signal, computed } from '@angular/core';
import { Language, Translations, translations } from './portfolio-translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private _currentLanguage = signal<Language>('en');

  private allTranslations = translations;

  currentLanguage = this._currentLanguage.asReadonly();

  availableLanguages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' }
  ];

  get currentLanguageData(): Translations {
    return this.allTranslations[this._currentLanguage()];
  }

  get t() {
    return computed(() => this.currentLanguageData);
  }

  setLanguage(lang: Language) {
    this._currentLanguage.set(lang);
    localStorage.setItem('portfolio-language', lang);
  }

  translate(key: string, params?: Record<string, any>): string {
    const data = this.currentLanguageData;
    const value = key.split('.').reduce((obj: any, k: string) => obj?.[k], data) || key;

    if (params && typeof value === 'string') {
      return Object.keys(params).reduce((str, paramKey) => {
        return str.replace(new RegExp(`{{${paramKey}}}`, 'g'), params[paramKey]);
      }, value);
    }

    return value;
  }

  initializeLanguage() {
    const saved = localStorage.getItem('portfolio-language') as Language;
    if (saved && this.availableLanguages.find(l => l.code === saved)) {
      this._currentLanguage.set(saved);
    } else {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (this.availableLanguages.find(l => l.code === browserLang)) {
        this._currentLanguage.set(browserLang);
      }
    }
  }
}
