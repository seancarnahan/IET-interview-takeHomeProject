import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TitleHeaderComponent } from './title-header/title-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './home/home.component';

import { FilmService } from './services/film.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleHeaderComponent,
    SidebarComponent,
    DataTableComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
