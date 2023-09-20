import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { themeChange } from 'theme-change';

export enum Theme {
  LIGHT = 'cupcake',
  DARK = 'forest'
}

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {
  private themeSubject: BehaviorSubject<string>;
  public thema$: Observable<string>;

  constructor() {
    themeChange();
    const theme = localStorage.getItem('theme') || Theme.LIGHT;
    this.themeSubject = new BehaviorSubject(theme);
    this.thema$ = this.themeSubject.asObservable();
  }

  toggleTheme(): void {
    const newTheme =
      this.themeSubject.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    this.themeSubject.next(newTheme);
  }
}
