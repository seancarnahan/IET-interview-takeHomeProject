import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films, Film } from '../models/film.model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FilmService {

  private serviceUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

  constructor(private http: HttpClient) { }

  getFilms():Observable<Films>  {
    return this.http.get<Films>(this.serviceUrl).map(data => data.results);

  }
}
