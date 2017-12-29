import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/**
 * This service responsible for making http request for MovieInfoComponent.
 */
@Injectable()
export class MovieInfoService {

  constructor(private httpService:Http) { }

  /**
   * This method will be called by MovieInfoComponent for geting the detail of a particular movie.
   * An id of type number is passed to this function and an observalble is returned which contains 
   * the response data in json format.
   */
  getMovieInfo(id:Number){
    return this.httpService.get('/movies/'+id)
    .map(res => res.json());
  }

}
