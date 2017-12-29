import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * This service responsible for making http request for HomePageComponent.
 */
@Injectable()
export class HomePageService {

  constructor(private httpService:Http) { }

  /**
   * This method will be called by HomePageComponent for getting all the movies.
   * No parameter is passed to this method. An observable will be returned by this method which 
   * contains response data in json format.
   */
  getMovies(){
    return this.httpService.get('/movies')
    .map(res => res.json());
  }

}
