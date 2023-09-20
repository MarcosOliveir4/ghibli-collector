import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeComponent } from './toggle-theme.component';
import { ToggleThemeService } from './toggle-theme.service';

@NgModule({
  declarations: [ToggleThemeComponent],
  imports: [CommonModule],
  exports: [ToggleThemeComponent],
  providers: [ToggleThemeService]
})
export class ToggleThemeModule {}
