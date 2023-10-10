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
  });
});
