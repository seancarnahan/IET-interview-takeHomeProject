import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { Film } from '../models/film.model';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() showMePartially: boolean;

  displayedColumns = ['id', 'title', 'vote_average', 'release_date', 'original_language'];

  constructor() { }

  ngOnInit() {

  }
}
