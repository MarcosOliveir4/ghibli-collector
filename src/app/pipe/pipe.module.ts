import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinutosParaHorasPipe } from './minutos-para-horas.pipe';

@NgModule({
  declarations: [MinutosParaHorasPipe],
  exports: [MinutosParaHorasPipe],
  imports: [CommonModule]
})
export class PipeModule {}
