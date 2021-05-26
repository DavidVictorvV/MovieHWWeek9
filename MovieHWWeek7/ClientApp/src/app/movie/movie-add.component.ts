import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Movie } from './movie.models.component';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['InsertCss.css']
})
export class MovieAddComponent {
  public movie: Movie = <Movie>{};

  constructor(private movieService: MovieService, private router: Router) {
  }

  public saveMovie() {
    this.movieService.saveMovie(this.movie).subscribe(result => {
      this.router.navigateByUrl("/movies")
    }, error => console.error(error));
  }
}


