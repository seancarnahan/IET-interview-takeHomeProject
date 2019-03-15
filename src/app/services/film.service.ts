import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/film.model';
import { Observable } from 'rxjs';


@Injectable()
export class FilmService {

  private serviceUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

  constructor(private http: HttpClient) { }

  getFilms():Observable<Film[]>  {
    return this.http.get<Film[]>(this.serviceUrl);
  }
}
