import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from 'src/app/shared/services/movies-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private _MoviesApiService: MoviesApiService) { }

  bannerData: any = [];
  trendingData: any = [];
  actionData: any = [];
  comedyData: any = [];
  adventureData: any = [];
  documentaryData: any = [];
  animationData: any = [];
  scienceData: any = [];
  thrillerData: any = [];

  ngOnInit() {
    this.banner();
    this.trending();
    this.thriller()
    this.action()
    this.adventure()
    this.animation()
    this.science()
    this.comedy()
    this.documentary()
}
  
  banner() {
    this._MoviesApiService.banner().subscribe({
       next: (res) => {
        console.log(res, 'banner#');
        this.bannerData = res.results;
      },
    })
  }

  trending() {
    this._MoviesApiService.trending().subscribe({
       next: (res) => {
        console.log(res, 'trending#');
        this.trendingData = res.results;
      },
    })
  }
  action() {
    this._MoviesApiService.fetchActionMovies().subscribe({
       next: (res) => {
        console.log(res, 'action#');
        this.actionData = res.results;
      },
    })
  }
  comedy() {
    this._MoviesApiService.fetchComedyMovies().subscribe({
       next: (res) => {
        console.log(res, 'comedy#');
        this.comedyData = res.results;
      },
    })
  }
  adventure() {
    this._MoviesApiService.fetchAdventureMovies().subscribe({
       next: (res) => {
        console.log(res, 'adv#');
        this.adventureData = res.results;
      },
    })
  }
  animation() {
    this._MoviesApiService.fetchAnimationMovies().subscribe({
       next: (res) => {
        console.log(res, 'animation#');
        this.animationData = res.results;
      },
    })
  }
  documentary() {
    this._MoviesApiService.fetchDocumentaryMovies().subscribe({
       next: (res) => {
        console.log(res, 'doc#');
        this.documentaryData = res.results;
      },
    })
  }
  science() {
    this._MoviesApiService.fetchScienceFictionMovies().subscribe({
       next: (res) => {
        console.log(res, 'sec#');
        this.scienceData = res.results;
      },
    })
  }
  thriller() {
    this._MoviesApiService.fetchThrillerMovies().subscribe({
       next: (res) => {
        console.log(res, 'th#');
        this.thrillerData = res.results;
      },
    })
  }


}
