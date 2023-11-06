import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutosParaHoras'
})
export class MinutosParaHorasPipe implements PipeTransform {
  transform(minutos: string): string {
    const horas = Math.floor(Number(minutos) / 60);
    const minutosRestantes = Number(minutos) % 60;

    return `${horas}h ${minutosRestantes}min`;
  }
}
