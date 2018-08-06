import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-movie',
  templateUrl: './selected-movie.component.html',
  styleUrls: ['./selected-movie.component.css']
})
export class SelectedMovieComponent implements OnInit {
  movie;

  constructor(private service: MoviesService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      
      this.service.getMovie(params.id).subscribe((data)=>
      {console.log(data);
        this.movie = data;
      })
    })
  }

}
