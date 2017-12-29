import { MovieInfoService } from './../services/movie-info.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../shared/movie';
import { ActivatedRoute } from '@angular/router';

/**
 * This Component will be rendered when user clicks on a movie for detail.
 * This component will show the available details for that movie.
 */
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  /**
   * holds the detial of current movie
   */
  movie:Movie = new Movie();

  /**
   * used to show rating in the form of starts.
   */
  ratingStars = [];
  
  constructor(private route:ActivatedRoute, private movieInfoService:MovieInfoService) { }

  /**
   * This function will be called once when the component will be loaded.
   */
  ngOnInit() {
    this.route.params.subscribe( param => {
      this.getMovieInfo(param.id);
    });
    for(let i=0; i<5; i++)
      this.ratingStars[i] = 'star-o';
  }

  /**
   * This function will be called for geting the detail of a particular movie.
   * An id of type number is passed to this function and noting is returned.
   */
  getMovieInfo(id:Number){
    this.movieInfoService.getMovieInfo(id)
    .subscribe( res => {
      this.movie = res.data;
      let num:number = this.movie.rating;
      let integerPart = parseInt(''+num);
      let decimalPart = num - integerPart;
      for(let i=0; i<integerPart; i++)
          this.ratingStars[i] = 'star';
      if(decimalPart >= 0.5)
        this.ratingStars[integerPart] = 'star-half-o';
      
    });
  }
}
