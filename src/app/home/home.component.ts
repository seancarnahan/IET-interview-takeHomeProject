import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  response: any;
  constructor (private http: HttpClient) {

  }

  ngOnInit() {

  }


  movieDataController ($scope,$http) {
    var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed";

    let obs = this.http.get(url);
    obs.subscribe((response) => {
      this.response = response;
      console.log(this.response);
    });
  }
}
