import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsExploreComponent } from './authors-explore/authors-explore.component';

const routes: Routes = [{
  path: '',
  component: AuthorsExploreComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
