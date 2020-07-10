import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OntimizeWebModule} from 'ontimize-web-ngx';
import { GenresRoutingModule } from './genres-routing.module';
import { GenresDetailComponent } from './genres-detail/genres-detail.component';
import { GenresExploreComponent } from './genres-explore/genres-explore.component';


@NgModule({
  imports: [
    CommonModule,
    GenresRoutingModule,
    OntimizeWebModule
  ],
  declarations: [
    GenresDetailComponent,
    GenresExploreComponent
  ]
})
export class GenresModule { }
