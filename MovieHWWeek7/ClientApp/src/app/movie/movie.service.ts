import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Movie } from './movie.models.component';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  loadMovies() {
    return this.http.get<Movie[]>(this.baseUrl + 'api/movies')
  }

  public deleteMovie(movie: Movie) {
   return this.http.delete(this.baseUrl + 'api/movies/' + movie.id)
  }

  public saveMovie(movie: Movie) {
    return this.http.post(this.baseUrl + 'api/movies', movie)
  }

}
