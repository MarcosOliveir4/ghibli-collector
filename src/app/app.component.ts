import { Component } from '@angular/core';
import { GhibliApiService } from './services/ghibli-api/ghibli-api.service';
import { GetFilms } from './services/ghibli-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ghibli Collector';
  public ghibliFilms!: GetFilms[];
  constructor(private ghibliApiService: GhibliApiService) {
    this.ghibliApiService.getFilms().subscribe((resp) => {
      this.ghibliFilms = resp;
    });
  }
}
