import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ghibli-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ghibli-card.component.html',
  styleUrls: ['./ghibli-card.component.scss']
})
export class GhibliCardComponent {
  @Input() title!: string;
  @Input() img!: string;
  @Input() description!: string;
}
