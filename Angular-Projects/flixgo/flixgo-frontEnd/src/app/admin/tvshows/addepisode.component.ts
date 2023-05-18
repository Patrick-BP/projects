import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { EpisodeService } from 'src/app/services/episode.service';
import { GlobalstateService } from 'src/app/services/globalstate.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TvshowslistService } from 'src/app/services/tvshowslist.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Iepisode } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-addepisode',
  templateUrl: './addepisode.component.html',
  styleUrls: ['./addepisode.component.css'],
})
export class AddepisodeComponent implements OnInit {
  episodeform = inject(FormBuilder).nonNullable.group({
    title: ['', [Validators.required]],
    season: ['', [Validators.required]],
    episode: ['', [Validators.required]],
    url: [''],
  });
  responseMessage!: string;
  constructor(
    private ngxLoader: NgxUiLoaderService,
    private dialogRef: MatDialogRef<AddepisodeComponent>,
    private globalState: GlobalstateService,
    private episodeService: EpisodeService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {}
  submitEpisode() {
    this.ngxLoader.start();
    const tvShowId = this.globalState.tvShow.value._id;
    const formData = this.episodeform.value;
    const data = { ...formData, tvshow_Id: tvShowId };
    
    this.episodeService.addEpisode(data as Iepisode).subscribe({
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
}
