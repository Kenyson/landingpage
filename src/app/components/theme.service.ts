import { Injectable, signal, inject } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';
  currentTheme = signal<Theme>('dark');

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme;
    const initialTheme = savedTheme || 'dark';

    this.setTheme(initialTheme);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
    localStorage.setItem(this.STORAGE_KEY, theme);

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  getThemeIcon(): string {
    return this.currentTheme() === 'dark' ? 'pi pi-sun' : 'pi pi-moon';
  }

  getThemeLabel(): string {
    return this.currentTheme() === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }
}