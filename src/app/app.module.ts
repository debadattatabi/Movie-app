import { MovieInfoService } from './services/movie-info.service';
import { MockBackend } from '@angular/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { HomePageService } from './services/homepage.service';
import { movieDataProvider } from './shared/movie-data';

/**
 * This is the main module of our app.
 */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
    MovieInfoService,
    HomePageService,
    /**
     * Below there are only required at the time of testing.
     * When we have real backend, these three should be removed.
     */
    movieDataProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
