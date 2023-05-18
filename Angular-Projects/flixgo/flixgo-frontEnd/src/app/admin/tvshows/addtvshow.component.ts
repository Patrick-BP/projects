import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalstateService } from 'src/app/services/globalstate.service';
import { MoviesService } from 'src/app/services/movies.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TvshowslistService } from 'src/app/services/tvshowslist.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { ITvshows } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-addtvshow',
  templateUrl: './addtvshow.component.html',
  styleUrls: ['./addtvshow.component.css'],
})
export class AddtvshowComponent implements OnInit {
  selectGenre = new FormControl('');
  selectGenreList: string[] = [
    'Action',
    'Comedy',
    'Drama',
    'Family',
    'Romance',
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
  tvform = inject(FormBuilder).nonNullable.group({
    title: ['', [Validators.required]],
    overview: ['', [Validators.required]],
    releaseDate: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    language: ['', [Validators.required]],
    director: ['', [Validators.required]],
    country: ['', [Validators.required]],
  });

  constructor(
    private ngxLoader: NgxUiLoaderService,
    private dialogRef: MatDialogRef<AddtvshowComponent>,
    private globalState: GlobalstateService,
    private tvshowService: TvshowslistService,
    private snackbar: SnackbarService
  ) {}

  submitTvshow() {
    this.ngxLoader.start();
    const formData = this.tvform.value;
    this.tvshowService.addTvshow(formData as ITvshows).subscribe({
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
    this.tvshowService.getAllTvshows().subscribe((res) => {
      this.globalState.tvShowList.next(res.data as ITvshows[]);
    });
  }
  ngOnInit(): void {}
}
