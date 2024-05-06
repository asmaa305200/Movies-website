
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { MoviesApiService } from 'src/app/shared/services/movies-api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResult: any;
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });

  constructor(private _MoviesApiService: MoviesApiService) {}

  ngOnInit() {
    const movieNameControl = this.searchForm.get('movieName');
    if (movieNameControl) {
      movieNameControl.valueChanges
        .pipe(
          debounceTime(300), 
          distinctUntilChanged(),
          switchMap(value => this._MoviesApiService.getSearchMovie({ movieName: value })) 
        )
        .subscribe({
          next: (res) => {
            console.log(res, 'search result');
            this.searchResult = res.results;
          },
          error: (err) => {
            console.error(err);
          }
        });
    }
  }
}
