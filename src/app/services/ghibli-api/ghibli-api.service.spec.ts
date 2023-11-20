import { GhibliApiService } from './ghibli-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from '../../../environments/environment';

describe('GhibliApiService', () => {
  let service: GhibliApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GhibliApiService]
    });

    service = TestBed.inject(GhibliApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    localStorage.clear();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getFilms', () => {
    it('should retrieve films from the API', () => {
      const mockFilms = [{ title: 'Film 1' }, { title: 'Film 2' }];

      service.getFilms().subscribe((films) => {
        expect(films).toEqual(mockFilms);
      });

      const req = httpTestingController.expectOne(
        `${environment.url_api}/films`
      );
      expect(req.request.method).toEqual('GET');

      req.flush(mockFilms);
    });
    it('should retrieve film by id from the API', () => {
      const mockFilms = { title: 'Film 1' };

      service.getFilmById('01').subscribe((films) => {
        expect(films).toEqual(mockFilms);
      });

      const req = httpTestingController.expectOne(
        `${environment.url_api}/films/01`
      );
      expect(req.request.method).toEqual('GET');

      req.flush(mockFilms);
    });
    it('should retrieve films liked from the localstorage', () => {
      const mockFilms = ['01', '02'];
      localStorage.setItem('filmsLiked', JSON.stringify(mockFilms));

      const filmsLiked = service.getFilmsLiked();
      expect(filmsLiked).toEqual(mockFilms);
    });
    it('should set films liked in the localstorage', () => {
      const mockFilms = ['01', '02'];
      service.setFilmsLiked('01');
      service.setFilmsLiked('02');
      const filmsLiked = service.getFilmsLiked();
      expect(filmsLiked).toEqual(mockFilms);
    });
    it('should not set film already added', () => {
      const mockFilms = ['01'];
      service.setFilmsLiked('01');
      service.setFilmsLiked('01');
      const filmsLiked = service.getFilmsLiked();
      expect(filmsLiked).toEqual(mockFilms);
    });
    it('should remove films liked in the localstorage', () => {
      const mockFilms = ['01'];
      service.setFilmsLiked('01');
      service.setFilmsLiked('02');
      service.removeFilmsLiked('02');
      const filmsLiked = service.getFilmsLiked();
      expect(filmsLiked).toEqual(mockFilms);
    });
  });
});
