import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from 'src/app/shared/services/movies-api.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{
  constructor(private _MoviesApiService: MoviesApiService, private _ActivatedRoute: ActivatedRoute) { }
  detailsData: any;
  getMovieVideoData: any;
  getMovieCastData: any;
  ngOnInit(): void {
    let paramId = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getMovieDetails(paramId)
    this.getMovieVideo(paramId)
    this.getMovieCast(paramId)
  }
   

  // getMovieDetails(paramId: any) {
  //   this._MoviesApiService.getMovieDetails(paramId).subscribe((res) => {
  //     console.log(res , 'det#');
  //     this.detailsData = res;
  //   })
  // }
   getMovieDetails (paramId:any) {
    this._MoviesApiService.getMovieDetails(paramId).subscribe({
       next: (res) => {
        console.log(res, 'det#');
        this.detailsData = res;
       
      },
    })
  }
  getMovieVideo(paramId:any) {
    this._MoviesApiService.getMovieVideo(paramId).subscribe((res)=>{
      console.log(res, 'ved#');
        res.results.forEach((element:any) => {
          if (element.type == "Trailer")
          {
            this.getMovieVideoData = element.key;
          }
        })
       
     
    })
  }
  getMovieCast(paramId:any) {
    this._MoviesApiService.getMovieCast(paramId).subscribe({
       next: (res) => {
        console.log(res, 'details#');
        this.getMovieCastData = res.cast;
       
      },
    })
  }

}
