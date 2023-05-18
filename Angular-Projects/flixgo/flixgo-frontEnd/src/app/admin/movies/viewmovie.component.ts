import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from 'src/app/services/dialog.service';
import { GlobalstateService } from 'src/app/services/globalstate.service';
import { MoviesService } from 'src/app/services/movies.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from 'src/app/services/user.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { IMovie } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css'],
})
export class ViewmovieComponent implements OnInit {
  movieDetails!: IMovie;
  responseMessage: string = '';
  constructor(
    private globalstate: GlobalstateService,
    private ngxloader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private movieService: MoviesService,
    private dialogService: DialogService
  ) {
    this.movieDetails = globalstate.movie.value;
  }
  uploadImg(e: any) {
    if(e.target.files){
    this.ngxloader.start();
    const data = new FormData();
    const file = <File>e.target?.files[0];
    const filename = Date.now() + file.name;
    data.append('image', file, filename);
    this.movieService
      .updatePosterById(this.globalstate.movie.value._id, data)
      .subscribe({
        next: (res) => {
          if (res.error == true) {
            this.ngxloader.stop();
            this.responseMessage = res.message;
            this.snackbar.openSnackBar(
              this.responseMessage,
              GlobalConstants.error
            );
          } else {
            this.responseMessage = res.message;
            this.snackbar.openSnackBar(this.responseMessage, '');

            this.refreshMovie();
          }
        },
        error: (error) => {
          this.ngxloader.stop();
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
          this.ngxloader.stop();
        },
      });

    }
  }

  uploadVideo(e: any) {
    if(e.target.files){
    this.ngxloader.start();
    const data = new FormData();
    const file = <File>e.target?.files[0];
    const filename = Date.now() + file.name;
    data.append('movie', file, filename);
    this.movieService
      .updateVideoById(this.globalstate.movie.value._id, data)
      .subscribe({
        next: (res) => {
          if (res.error == true) {
            this.ngxloader.stop();
            this.responseMessage = res.message;
            this.snackbar.openSnackBar(
              this.responseMessage,
              GlobalConstants.error
            );
          } else {
            this.responseMessage = res.message;
            this.snackbar.openSnackBar(this.responseMessage, '');
            this.refreshMovie();
          }
        },
        error: (error) => {
          this.ngxloader.stop();
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
          this.ngxloader.stop();
        },
      });
    }
  }

  refreshMovie() {
    this.movieService
      .getMovieById(this.globalstate.movie.value._id)
      .subscribe((res) => {
        this.globalstate.movie.next(res.data as IMovie);
        this.movieDetails = this.globalstate.movie.value;
      });
  }
  ngOnInit(): void {}
}
