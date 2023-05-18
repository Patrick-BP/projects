import { AfterViewInit, Component, OnDestroy } from '@angular/core';

import { GlobalstateService } from '../services/globalstate.service';
import { MoviesService } from '../services/movies.service';
import { IManageuser, IMovie, ITvshows } from '../shared/movie.interface';
import { Iuser } from '../user/user.Interface';
import { UserService } from '../services/user.service';
import { TvshowslistService } from '../services/tvshowslist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnDestroy {
  responseMessage!: string;
  userList!: Iuser[];
  moviesList!: IMovie[];
  tvList: ITvshows[] = [];
  usersList!: IManageuser[];
  moviesListSub!: any;
  usersListSub!: any;
  tvListSub!: any;

  constructor(
    private globalState: GlobalstateService,
    private movieService: MoviesService,
    private userService: UserService,
    private tvshowService: TvshowslistService
  ) {
    this.tableData();
    this.userstable();
    this.tvshowtable();
    this.moviesListSub = this.globalState.moviesList.subscribe((state) => {
      this.moviesList = state;
    });
    this.usersListSub = this.globalState.usersList.subscribe((state) => {
      this.usersList = state;
    });
    this.tvListSub = this.globalState.tvShowList.subscribe((state) => {
      this.tvList = state;
    });
  }

  ngOnDestroy(): void {
    this.moviesListSub.unsubscribe();
    this.usersListSub.unsubscribe();
  }

  userstable() {
    this.userService.getAllUsers().subscribe((res) => {
      this.globalState.usersList.next(res.data as IManageuser[]);
    });
  }
  tableData() {
    this.movieService.getAllMovies().subscribe((res) => {
      this.globalState.moviesList.next(res.data as IMovie[]);
    });
  }

  
  tvshowtable() {
    this.tvshowService.getAllTvshows().subscribe((res) => {
      this.globalState.tvShowList.next(res.data as ITvshows[]);
    });
  }
}
