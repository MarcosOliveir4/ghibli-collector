import { Component, OnDestroy, OnInit } from '@angular/core';
import { GhibliApiService } from '../../services/ghibli-api/ghibli-api.service';
import { GetFilms } from '../../services/ghibli-api';
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public ghibliFilms!: GetFilms[];
  public subscriptionGhibliFilms!: Subscription;
  public subjectGhibliFilms = new Subject();
  public loadingGhibliFilms = true;

  constructor(private ghibliApiService: GhibliApiService) {}

  public getFilms(): void {
    this.cancelSubscription();
    this.loadingGhibliFilms = true;
    this.subscriptionGhibliFilms = this.ghibliApiService
      .getFilms()
      .pipe(
        takeUntil(this.subjectGhibliFilms),
        finalize(() => {
          this.loadingGhibliFilms = false;
          this.subscriptionGhibliFilms.unsubscribe();
        })
      )
      .subscribe((resp) => {
        this.ghibliFilms = resp;
      });
  }

  private cancelSubscription(): void {
    this.subjectGhibliFilms.next({});
    this.subjectGhibliFilms.complete();
    this.subjectGhibliFilms.unsubscribe();
    this.subjectGhibliFilms = new Subject();
  }

  ngOnInit(): void {
    this.getFilms();
  }

  ngOnDestroy(): void {
    this.cancelSubscription();
    this.subscriptionGhibliFilms?.unsubscribe();
  }
}
