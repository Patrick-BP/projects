import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from '../../services/dialog.service';
import { GlobalstateService } from '../../services/globalstate.service';
import { MoviesService } from '../../services/movies.service';
import { SnackbarService } from '../../services/snackbar.service';
import { AddmovieComponent } from '../movies/addmovie.component';
import { EditmovieComponent } from '../movies/editmovie.component';
import { IMovie } from '../../shared/movie.interface';
import { GlobalConstants } from '../../shared/global-constants';
import { ViewmovieComponent } from '../movies/viewmovie.component';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-moviedashboard',
  templateUrl: './moviedashboard.component.html',
  styleUrls: ['./moviedashboard.component.css'],
})
export class MoviedashboardComponent implements OnInit, OnDestroy {
  searchInput!: string;
  responseMessage!: string;
  moviesList!: IMovie[];
  ishownMoviesTable!: boolean;
  moviesListSub!: Subscription;
  movieServiceSub!: Subscription;
  dialogServiceSub!: Subscription;
  userServiceSub!: Subscription;

  constructor(
    private globalState: GlobalstateService,
    private matDialog: MatDialog,
    private movieService: MoviesService,
    private userService: UserService,
    private snackbar: SnackbarService,
    private dialogService: DialogService,
    private ngxloard: NgxUiLoaderService
  ) {}
  ngOnInit(): void {
    this.moviesListSub = this.globalState.moviesList.subscribe((state) => {
      this.moviesList = state.reverse();
    });
  }

  addMovies() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(AddmovieComponent, dialogConfig);
  }

  editMovie(id: string) {
    this.movieServiceSub = this.movieService
      .getMovieById(id)
      .subscribe((res) => {
        this.globalState.movie.next(res.data as IMovie);
        const dialogConfig = new MatDialogConfig();
        this.matDialog.open(EditmovieComponent, dialogConfig);
      });
  }
  viewMovie(id: string) {
    this.movieServiceSub = this.movieService
      .getMovieById(id)
      .subscribe((res) => {
        this.globalState.movie.next(res.data as IMovie);
        const dialogConfig = new MatDialogConfig();
        this.matDialog.open(ViewmovieComponent, dialogConfig);
      });
  }

  delMovie(id: string) {
    this.dialogServiceSub = this.dialogService
      .openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxloard.start();
          this.movieServiceSub = this.movieService
            .deleteMovieById(id)
            .subscribe({
              next: (res) => {
                if (res.error == true) {
                  this.ngxloard.stop();
                  this.responseMessage = res.message;
                  this.snackbar.openSnackBar(
                    this.responseMessage,
                    GlobalConstants.error
                  );
                } else {
                  this.responseMessage = res.message;
                  this.snackbar.openSnackBar(this.responseMessage, '');
                  this.tableData();
                }
              },
              error: (error) => {
                this.ngxloard.stop();
                if (error.error?.message) {
                  this.responseMessage = error.error?.message;
                } else {
                  this.responseMessage = GlobalConstants.genericError;
                }
                this.snackbar.openSnackBar(
                  this.responseMessage,
                  GlobalConstants.error
                );
              },
              complete: () => {
                this.ngxloard.stop();
              },
            });
        }
      });
  }
  indexTracker() {}

  tableData() {
    this.movieServiceSub = this.movieService.getAllMovies().subscribe((res) => {
      this.globalState.moviesList.next(res.data as IMovie[]);
    });
  }

  ngOnDestroy(): void {
    this.moviesListSub.unsubscribe();
  }
}
