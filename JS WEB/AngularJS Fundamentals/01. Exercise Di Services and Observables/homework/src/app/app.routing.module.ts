import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';


const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: SelectedMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }