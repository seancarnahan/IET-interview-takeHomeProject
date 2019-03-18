import { Component, OnInit, OnDestroy} from '@angular/core';
import { FilmService } from '../services/film.service';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Film } from '../models/film.model';
import { AggieFilm } from '../models/aggie-film';
import {AnonymousSubscription} from "rxjs/Subscription";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  dataSource = new DataTableSource(this.filmService);
  displayedColumns = ['id', 'title', 'overview', 'release_date'];
  private timerSubscription: AnonymousSubscription;

  constructor(private filmService: FilmService) { }

  ngOnInit() {
  }

  private refreshData(): void {
    window.location.reload();
  }


}

export class DataTableSource extends DataSource<any> {
  constructor(private filmService: FilmService) {
    super();
  }

  connect(): Observable<Film[]> {
    return this.filmService.getFilms();
  }

  disconnect(){}
}
