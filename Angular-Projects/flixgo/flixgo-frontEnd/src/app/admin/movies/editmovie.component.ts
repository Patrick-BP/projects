import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../../shared/global-constants';
import { GlobalstateService } from '../../services/globalstate.service';
import { MoviesService } from '../../services/movies.service';
import { SnackbarService } from '../../services/snackbar.service';
import { IMovie } from '../../shared/movie.interface';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css'],
})
export class EditmovieComponent implements OnInit {
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
    title: [''],
    overview: [''],
    releaseDate: [''],
    genre: [''],
    language: [''],
    director: [''],
    quality: [''],
    country: [''],
  });

  constructor(
    private globalState: GlobalstateService,
    private movieService: MoviesService,
    private ngxLoader: NgxUiLoaderService,
    private dialogRef: MatDialogRef<EditmovieComponent>,
    private snackbar: SnackbarService
  ) {
    this.movieform.patchValue(this.globalState.movie.value);
  }

  ngOnInit(): void {}
  submitMovie() {
    const movieId = this.globalState.movie.value._id;
    this.ngxLoader.start();
    const formData = this.movieform.value;
    this.movieService.updateMovieById(movieId, formData as IMovie).subscribe({
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
          this.tableData();
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
  tableData() {
    this.movieService.getAllMovies().subscribe((res) => {
      this.globalState.moviesList.next(res.data as IMovie[]);
    });
  }
}
