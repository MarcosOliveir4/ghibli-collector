import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GetFilms } from './ghibli-api.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GhibliApiService {
  private baseUrl = environment.url_api;
  constructor(private httpClient: HttpClient) {}

  public getFilms(): Observable<GetFilms[]> {
    return this.httpClient.get<GetFilms[]>(`${this.baseUrl}/films`);
  }

  public getFilmById(id: string): Observable<GetFilms> {
    return this.httpClient.get<GetFilms>(`${this.baseUrl}/films/${id}`);
  }
}
