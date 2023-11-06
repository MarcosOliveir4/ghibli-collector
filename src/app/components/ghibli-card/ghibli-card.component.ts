import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ghibli-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './ghibli-card.component.html',
  styleUrls: ['./ghibli-card.component.scss']
})
export class GhibliCardComponent {
  @Input() title!: string;
  @Input() img!: string;
  @Input() description!: string;
  @Input() id!: string;
  @Output() handleClick: EventEmitter<string> = new EventEmitter<string>();

  public handleCardClick(): void {
    this.handleClick.emit(this.id);
  }
}
