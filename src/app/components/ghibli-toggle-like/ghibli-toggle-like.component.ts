import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

export interface ToggleLikeInterface {
  currentValue: boolean;
}

@Component({
  selector: 'app-ghibli-toggle-like',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ghibli-toggle-like.component.html',
  styleUrls: ['./ghibli-toggle-like.component.scss']
})
export class GhibliToggleLikeComponent {
  @Input() liked!: boolean;
  @Output() toggleLike: EventEmitter<ToggleLikeInterface> =
    new EventEmitter<ToggleLikeInterface>();

  public onToggleLike(): void {
    this.toggleLike.emit({ currentValue: this.liked });
  }
}
