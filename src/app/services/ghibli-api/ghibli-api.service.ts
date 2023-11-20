import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GetFilms } from './ghibli-api.model';
import { BehaviorSubject, Observable } from 'rxjs';

const keyLocalStorage = 'filmsLiked';

@Injectable({
  providedIn: 'root'
})
export class GhibliApiService {
  private baseUrl = environment.url_api;
  constructor(private httpClient: HttpClient) {
    this.setFilmsLiked('12cfb892-aac0-4c5b-94af-521852e46d6a');
  }

  public getFilms(): Observable<GetFilms[]> {
    return this.httpClient.get<GetFilms[]>(`${this.baseUrl}/films`);
  }

  public getFilmById(id: string): Observable<GetFilms> {
    return this.httpClient.get<GetFilms>(`${this.baseUrl}/films/${id}`);
  }

  public getFilmsLiked(): string[] {
    const filmsLiked = localStorage.getItem(keyLocalStorage);
    return filmsLiked ? JSON.parse(filmsLiked) : [];
  }

  public setFilmsLiked(filmLiked: string): void {
    const filmsLiked = this.getFilmsLiked();
    if (filmsLiked.includes(filmLiked)) {
      return;
    }
    filmsLiked.push(filmLiked);
    localStorage.setItem(keyLocalStorage, JSON.stringify(filmsLiked));
  }

  public removeFilmsLiked(filmLiked: string): void {
    const filmsLiked = this.getFilmsLiked();
    const index = filmsLiked.indexOf(filmLiked);
    if (index > -1) {
      filmsLiked.splice(index, 1);
    }
    localStorage.setItem(keyLocalStorage, JSON.stringify(filmsLiked));
  }
}
