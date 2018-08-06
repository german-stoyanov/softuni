import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Movies } from '../models/movies';
const apiKey = '51e86bc5cc52c14c54069629a13b24e6';
const API_KEY_ALT = '?api_key=51e86bc5cc52c14c54069629a13b24e6';

@Injectable()
export class MoviesService {

  path = 'https://api.themoviedb.org/3/';
  popular = 'discover/movie?sort_by=popularity.desc';
  authentication = '&api_key=';
  kids= 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  theatre = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
  drama = 'discover/movie?with_genres=18&primary_release_year=2014';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movies>{
    return this.http.get<Movies>(this.path+this.popular+this.authentication+apiKey);
  }

  getMovie(id): Observable<Object> {
    return this.http.get<object>(this.path + `movie/${id}` + API_KEY_ALT);
  }

  getTheatre(): Observable<Movies>{
    return this.http.get<Movies>(this.path+this.theatre+this.authentication+apiKey);
  }

  getKids(): Observable<Movies>{
    return this.http.get<Movies>(this.path+this.kids+this.authentication+apiKey);
  }

  getDrama(): Observable<Movies>{
    return this.http.get<Movies>(this.path+this.drama+this.authentication+apiKey);
  }
}
