import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchResultsHomeComponent} from './search-results-home/search-results-home.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchResultsRoutingModule { }
