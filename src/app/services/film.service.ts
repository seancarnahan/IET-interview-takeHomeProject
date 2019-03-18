import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films, Film } from '../models/film.model';
import { AggieFilm } from '../models/aggie-film';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'; 

@Injectable()
export class FilmService {

  private serviceUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Films> {
    return this.http.get<Films>(this.serviceUrl).map(data => data.results);
  }

  getAggieFilms(): Observable<AggieFilm[]>  {
    let aggieFilms:AggieFilm[] = [];
    this.http.get<Films>(this.serviceUrl).map(data => data.results)
    .subscribe(
      (films) => {
        for (let i of films) {
          const aggieFilm: AggieFilm = { 
            activity: {
              icon: "icon comment",
              actor: {
                id: "ECS",
                objectType: "person",
                displayName: "Engineering Computer Science",
                author: {
                  id: "scarnahan",
                  displayName: "Sean Carnahan"
                }
              },
              verb: "post",
              title: i.title,
              object: {
                ucdSrcId: i.id,
                objectType: "notification",
                content: i.overview,
                ucdEdusModel: {
                  url: "",
                  urlDisplayName: i.title
                }
              },
              to: {
                groups: ["students", "faculty"],
                users: []
              },
              ucdEdusMeta: {
                labels: ["entertainment"],
                authzId: "scarnahan",
                startDate: i.release_date,
                endDate: ""
              }
            }
        }
        aggieFilms.push(aggieFilm);
      }}
    );
    return Observable.of(aggieFilms);
  }
}
