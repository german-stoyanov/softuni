import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

import { Movies } from '../models/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movies;
  theaters: Movies;
  kids: Movies;
  drama: Movies;
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getPopular().subscribe(data=>this.popular = data)
    this.service.getTheatre().subscribe(data=>this.theaters = data)
    this.service.getKids().subscribe(data=>this.kids = data)
    this.service.getDrama().subscribe(data=>this.drama = data)
  }

}
