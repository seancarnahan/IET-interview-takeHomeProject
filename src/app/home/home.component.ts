import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  response: any;
  constructor () {

  }
  ngOnInit() {}
}
