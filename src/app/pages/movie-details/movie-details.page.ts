import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(private activaedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.activaedRoute.snapshot.paramMap.get('id');

     this.movieService.getDetails(id).subscribe(res => {
       console.log('details', res);
       this.information = res;
     });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank')
  }
}
