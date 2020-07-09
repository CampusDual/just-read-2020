import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsExploreComponent } from './authors-explore/authors-explore.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';

const routes: Routes = [{
  path: '',
  component: AuthorsExploreComponent
},
{
  path: ":author_id",
  component: AuthorsDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
