import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresDetailComponent } from './genres-detail/genres-detail.component';
import { GenresExploreComponent } from './genres-explore/genres-explore.component';



const routes: Routes = [{
  path: '',
  component: GenresExploreComponent
},
{
  path: ':genre_id',
  component: GenresDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenresRoutingModule { }
