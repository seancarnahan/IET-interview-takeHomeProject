import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableComponent } from './data-table/data-table.component';
import { HomeComponent } from './home/home.component';
import { DisplayJsonComponent } from './display-json/display-json.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'data-table',
    component: DataTableComponent
  },
  {
    path: 'display-json',
    component: DisplayJsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
