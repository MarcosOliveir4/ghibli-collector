import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { GhibliApiService } from '../../services/ghibli-api/ghibli-api.service';
import { finalize, Subscription } from 'rxjs';
import { GetFilms } from '../../services/ghibli-api';
import { PipeModule } from '../../pipe/pipe.module';
import { GhibliToggleLikeComponent } from '../../components';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    PipeModule,
    GhibliToggleLikeComponent
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  @Input() id!: string;
  public film!: GetFilms;
  public filmLiked!: boolean;
  public loadingFilm = true;
  public subscription!: Subscription;

  constructor(
    private router: Router,
    private ghibliApiService: GhibliApiService
  ) {}

  public async goBack(): Promise<void> {
    await this.router.navigate(['/home']);
  }

  public getFilm(): void {
    this.subscription = this.ghibliApiService
      .getFilmById(this.id)
      .pipe(finalize(() => (this.loadingFilm = false)))
      .subscribe((data) => {
        this.film = data;
        data.running_time;
      });
  }

  public toggleLike(): void {
    this.filmLiked
      ? this.ghibliApiService.removeFilmsLiked(this.id)
      : this.ghibliApiService.setFilmsLiked(this.id);
    this.getFilmLiked();
  }

  private getFilmLiked(): void {
    const filmsLiked = this.ghibliApiService.getFilmsLiked();
    this.filmLiked = filmsLiked.includes(this.id);
  }

  ngOnInit() {
    this.getFilm();
    this.getFilmLiked();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
