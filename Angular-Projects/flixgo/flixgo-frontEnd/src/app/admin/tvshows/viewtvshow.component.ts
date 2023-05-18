import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { GlobalstateService } from 'src/app/services/globalstate.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { TvshowslistService } from 'src/app/services/tvshowslist.service';
import { GlobalConstants } from 'src/app/shared/global-constants';
import { Iepisode, ITvshows } from 'src/app/shared/movie.interface';

@Component({
  selector: 'app-viewtvshow',
  templateUrl: './viewtvshow.component.html',
  styleUrls: ['./viewtvshow.component.css'],
})
export class ViewtvshowComponent implements OnInit, OnDestroy {
  
  tvshowDetails!: ITvshows;
  episodes!: any;
  dialogServiceSub!: Subscription;
  responseMessage!: string;
  constructor(
    private globalstate: GlobalstateService,
    private episodeService: EpisodeService,
    private dialogService: DialogService,
    private ngxloader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private tvshowService: TvshowslistService
  ) {
    this.tvshowDetails = globalstate.tvShow.value;
    this.fetchEpisodes();
  }
  ngOnDestroy(): void {}

  fetchEpisodes() {
    this.episodeService
      .getEpisodesTvshowById(this.globalstate.tvShow.value._id)
      .subscribe((res) => {
        const episodeArr: any = res.data;
        let episodeObject: Object;
        if (episodeArr.length > 0) {
          episodeObject = Object.values(
            episodeArr.reduce((r: any, o: any) => {
              (r[o.season] = r[o.season] || []).push(o);
              return r;
            }, {})
          );
          this.episodes = episodeObject;
        }
      });
  }

  refreshTvShow() {
    this.tvshowService
      .getTvshowById(this.tvshowDetails._id)
      .subscribe((res) => {
        this.globalstate.tvShow.next(res.data as ITvshows);
        this.tvshowDetails = this.globalstate.tvShow.value;
      });
  }

  deleteepis(id: string) {
    this.dialogServiceSub = this.dialogService
      .openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxloader.start();
          this.episodeService.deleteEpisodeById(id).subscribe({
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
                this.fetchEpisodes();
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
      });
  }

  uploadImg(e: any, tvId: string) {
    if(e.target.files){
    this.ngxloader.start();
    const data = new FormData();
    const file = <File>e.target?.files[0];
    const filename = Date.now() + file.name;
    data.append('image', file, filename);

    this.tvshowService.updatePosterById(tvId, data).subscribe({
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
          this.refreshTvShow();
        }
      },
      error: (error) => {
        this.ngxloader.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbar.openSnackBar(this.responseMessage, GlobalConstants.error);
      },
      complete: () => {
        this.ngxloader.stop();
      },
    });
  }
  }

  uploadVideo(e: any, episId: string) {
    if(e.target.files){
    this.ngxloader.start();
    const data = new FormData();
    const file = <File>e.target?.files[0];
    const filename = Date.now() + file.name;
    data.append('episode', file, filename);
    console.log(file);
    this.episodeService.updateVideoById(episId, data).subscribe({
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
          this.fetchEpisodes();
        }
      },
      error: (error) => {
        this.ngxloader.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbar.openSnackBar(this.responseMessage, GlobalConstants.error);
      },
      complete: () => {
        this.ngxloader.stop();
      },
    });
  }
  }

  indexTracker() {}
  ngOnInit(): void {}
}
