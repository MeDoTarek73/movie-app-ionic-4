import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { searchType, MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  results: Observable<any> ;
  searchTerm = '';
  type: searchType = searchType.all;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }
  searchChanged() {
    this.results = this.movieService.searchDate(this.searchTerm, this.type);
    this.results.subscribe(res => {
      console.log('my result:', res);
    });
  }
}
