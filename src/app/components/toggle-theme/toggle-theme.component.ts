import { Component, OnDestroy } from '@angular/core';
import { ToggleThemeService } from './toggle-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
})
export class ToggleThemeComponent implements OnDestroy {
  public theme!: string;
  private themeSubcription!: Subscription;

  constructor(private toggleThemeService: ToggleThemeService) {
    this.themeSubcription = this.toggleThemeService.thema$.subscribe(
      (theme) => {
        this.theme = theme;
      }
    );
  }

  public toggleTheme(): void {
    this.toggleThemeService.toggleTheme();
  }

  ngOnDestroy(): void {
    this.themeSubcription.unsubscribe();
  }
}
