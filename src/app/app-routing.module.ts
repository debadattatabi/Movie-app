import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HomepageComponent } from './homepage/homepage.component';

/**
 * This array hold all of our routes.
 */
const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path:'movie/:id', component: MovieInfoComponent
  }
];

/**
 * This module will handle routing in our app.
 */
@NgModule({
  imports: [AngularFontAwesomeModule, BrowserModule, RouterModule.forRoot(routes)],
  declarations: [MovieInfoComponent, HomepageComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
