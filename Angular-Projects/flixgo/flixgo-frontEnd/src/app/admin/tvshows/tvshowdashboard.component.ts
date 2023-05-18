import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from '../../services/dialog.service';
import { GlobalstateService } from '../../services/globalstate.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ITvshows } from '../../shared/movie.interface';
import { GlobalConstants } from '../../shared/global-constants';
import { AddtvshowComponent } from '../tvshows/addtvshow.component';
import { TvshowslistService } from '../../services/tvshowslist.service';
import { EdittvshowComponent } from '../tvshows/edittvshow.component';
import { Subscription } from 'rxjs';
import { AddepisodeComponent } from './addepisode.component';
import { ViewtvshowComponent } from './viewtvshow.component';

@Component({
  selector: 'app-tvshowdashboard',
  templateUrl: './tvshowdashboard.component.html',
  styleUrls: ['./tvshowdashboard.component.css'],
})
export class TvshowdashboardComponent implements OnDestroy {
  tvsearchInput!: string;
  responseMessage!: string;
  tvList: ITvshows[] = [];
  ishownMoviesTable!: boolean;
  tvListSub!: Subscription;
  tvshowServiceSub!: Subscription;
  dialogServiceSub!: Subscription;
  constructor(
    private globalState: GlobalstateService,
    private matDialog: MatDialog,
    private tvshowService: TvshowslistService,
    private dialogService: DialogService,
    private ngxloard: NgxUiLoaderService,
    private snackbar: SnackbarService
  ) {
    this.tvshowtable();
    this.tvListSub = this.globalState.tvShowList.subscribe((state) => {
      this.tvList = state.reverse();
    });
  }

  ngOnDestroy(): void {
    this.tvListSub.unsubscribe();
  }

  tvshowtable() {
    this.tvshowServiceSub = this.tvshowService
      .getAllTvshows()
      .subscribe((res) => {
        this.globalState.tvShowList.next(res.data as ITvshows[]);
        this.tvList = this.globalState.tvShowList.value;
      });
  }

  addTvshow() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(AddtvshowComponent, dialogConfig);
  }
  editTvshow(id: string) {
    this.tvshowServiceSub = this.tvshowService
      .getTvshowById(id)
      .subscribe((res) => {
        this.globalState.tvShow.next(res.data as ITvshows);
        const dialogConfig = new MatDialogConfig();
        this.matDialog.open(EdittvshowComponent, dialogConfig);
      });
  }
  addepisode(id: string) {
    this.tvshowService.getTvshowById(id).subscribe((res) => {
      this.globalState.tvShow.next(res.data as ITvshows);
      const dialogConfig = new MatDialogConfig();
      this.matDialog.open(AddepisodeComponent, dialogConfig);
    });
  }
  viewTvshow(id: string) {
    this.tvshowService.getTvshowById(id).subscribe((res) => {
      this.globalState.tvShow.next(res.data as ITvshows);
      const dialogConfig = new MatDialogConfig();
      this.matDialog.open(ViewtvshowComponent, dialogConfig);
    });
  }
  delTvshow(id: string) {
    this.dialogServiceSub = this.dialogService
      .openConfirmDialog('Deleting this Tv-show will delete all the episodes')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxloard.start();
          this.tvshowService.deleteTvshowById(id).subscribe({
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
                this.tvshowtable();
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
}
