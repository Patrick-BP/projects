import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../../shared/global-constants';
import { GlobalstateService } from '../../services/globalstate.service';
import { MoviesService } from '../../services/movies.service';
import { SnackbarService } from '../../services/snackbar.service';
import { IMovie } from '../../shared/movie.interface';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css'],
})
export class AddmovieComponent implements OnInit, OnDestroy {
  selectGenre = new FormControl('');
  selectGenreList: string[] = [
    'Action',
    'Comedy',
    'Drama',
    'Family',
    'Romance',
  ];

  selectQuality: any = [
    { value: '4K', viewValue: '4K' },
    { value: 'HD', viewValue: 'HD' },
    { value: 'SD', viewValue: 'SD' },
    { value: 'TS', viewValue: 'TS' },
    { value: 'CAM', viewValue: 'CAM' },
  ];
  selectLanguage: any = [
    { value: 'English', viewValue: 'English' },
    { value: 'French', viewValue: 'French' },
    { value: 'Chinese', viewValue: 'Chinese' },
  ];
  selectCountry: any = [
    { value: 'United States', viewValue: 'United States' },
    { value: 'France', viewValue: 'France' },
    { value: 'China', viewValue: 'China' },
  ];

  responseMessage!: string;
  movieform = inject(FormBuilder).nonNullable.group({
    title: ['', [Validators.required]],
    overview: ['', [Validators.required]],
    releaseDate: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    language: ['', [Validators.required]],
    director: ['', [Validators.required]],
    quality: ['', [Validators.required]],
    country: ['', [Validators.required]],
  });

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private dialogRef: MatDialogRef<AddmovieComponent>,
    private globalState: GlobalstateService,
    private movieService: MoviesService,
    private snackbar: SnackbarService
  ) {}
  ngOnDestroy(): void {}

  ngOnInit(): void {}
  submitMovie() {
    this.ngxLoader.start();
    const formData = this.movieform.value;
    this.movieService.addMovie(formData as IMovie).subscribe({
      next: (res) => {
        if (res.error == true) {
          this.ngxLoader.stop();
          this.responseMessage = res.message;
          this.snackbar.openSnackBar(
            this.responseMessage,
            GlobalConstants.error
          );
        } else {
          this.responseMessage = res.message;
          this.snackbar.openSnackBar(this.responseMessage, '');
          this.dialogRef.close();
          this.refreshList();
        }
      },
      error: (error) => {
        this.ngxLoader.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbar.openSnackBar(this.responseMessage, GlobalConstants.error);
      },
      complete: () => {
        this.ngxLoader.stop();
      },
    });
  }

  refreshList() {
    this.movieService.getAllMovies().subscribe((res) => {
      this.globalState.moviesList.next(res.data as IMovie[]);
    });
  }
}
