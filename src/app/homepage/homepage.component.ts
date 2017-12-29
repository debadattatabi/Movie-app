import { HomePageService } from './../services/homepage.service';
import { Movie } from './../shared/movie';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * This Component will be rendered when request for our app's homepage will be made.
 */
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  /**
   * hold the latest movies
   */
  latestMovies:Movie[] = new Array<Movie>();

  /**
   * hold the other movies
   */
  otherMovies:Movie[] = new Array<Movie>();

  constructor(private router:Router, private homepageService:HomePageService) { }

  /**
   * This function will be called once when the component will be loaded.
   */
  ngOnInit() {
   this.getMovies(); 
  }

  /**
   * This function will be called when user clicks on the image of a movie.
   * @param id of type number, represents the id for the movies detail we want to show
   */
  onMoviePosterClick(id:Number){
    this.router.navigate(['/movie',id]);
  }

  /**
   * This function will for getting all the movies.
   */
  getMovies(){
    let allMovies = new Array<Movie>();
    this.homepageService.getMovies().subscribe( res =>{
      allMovies = res.data;
      allMovies.forEach((movie) =>{
        if(movie.latest){
          this.latestMovies.push(movie);
        }else{
          this.otherMovies.push(movie);
        }
      });
    });
  }
}
