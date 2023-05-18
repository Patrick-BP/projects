import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { IMovie, ITvshows } from '../shared/movie.interface';
import { environment } from 'src/environments/environment';
import { TvshowslistService } from '../services/tvshowslist.service';
import { GlobalstateService } from '../services/globalstate.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  currentPageT: any = 12;
  currentPageM: any = 12;
  env: any = environment;
  moviesList: IMovie[] =[];
  tvshowsList: ITvshows[] =[];
  constructor(
    private movieService: MoviesService,
    private tvshowService: TvshowslistService,
    private globalState: GlobalstateService
  ) {
    this.movieService.getAllMovies().subscribe((res) => {
      this.moviesList = res.data;
    });

    this.tvshowService.getAllTvshows().subscribe((res) => {
      this.tvshowsList = res.data;
    });
  }
  loadMoreT() {
    this.currentPageT += 12;
  }
  loadMoreM() {
    this.currentPageM += 12;
  }
  ngOnInit(): void {}
}
