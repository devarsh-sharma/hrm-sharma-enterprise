import { Injectable } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private readonly themeKey = 'theme';

  constructor() {}

  /** Initialize theme on app start */
  initTheme(): void {
    const savedTheme = this.getTheme();
    this.applyTheme(savedTheme);
  }

  /** Set theme explicitly */
  setTheme(theme: ThemeMode): void {
    localStorage.setItem(this.themeKey, theme);
    this.applyTheme(theme);
  }

  /** Check if current theme is dark */
  isDark(): boolean {
    return this.getTheme() === 'dark';
  }

  /** Get theme from storage */
  private getTheme(): ThemeMode {
    return (localStorage.getItem(this.themeKey) as ThemeMode) || 'light';
  }

  /** Apply theme class to body */
  private applyTheme(theme: ThemeMode): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }
}
