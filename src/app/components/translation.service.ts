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

  translate(key: string, params?: Record<string, any>): any {
    const data = this.currentLanguageData;
    const value = key.split('.').reduce((obj: any, k: string) => obj?.[k], data);
    const finalValue = value === undefined || value === null ? key : value;

    if (params && typeof finalValue === 'string') {
      return Object.keys(params).reduce((str, paramKey) => {
        return str.replace(new RegExp(`{{${paramKey}}}`, 'g'), params[paramKey]);
      }, finalValue);
    }

    return finalValue;
  }

  initializeLanguage() {
    const saved = localStorage.getItem('portfolio-language') as Language;

    if (saved && this.availableLanguages.some(l => l.code === saved)) {
      this._currentLanguage.set(saved);
      return;
    }

    const browserLanguage = (navigator.language || navigator.languages?.[0] || 'en').split('-')[0] as Language;
    const supportedBrowserLang = this.availableLanguages.some(l => l.code === browserLanguage)
      ? browserLanguage
      : 'en';

    this._currentLanguage.set(supportedBrowserLang);
  }
}
