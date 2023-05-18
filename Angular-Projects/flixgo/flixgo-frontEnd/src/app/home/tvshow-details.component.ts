import { Component, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { CommentsService } from '../services/comments.service';
import { DialogService } from '../services/dialog.service';
import { EpisodeService } from '../services/episode.service';
import { GlobalstateService } from '../services/globalstate.service';
import { MoviesService } from '../services/movies.service';
import { SnackbarService } from '../services/snackbar.service';
import { TvshowslistService } from '../services/tvshowslist.service';
import { ImovieComment } from '../shared/comments.interface';
import { GlobalConstants } from '../shared/global-constants';
import { IMovie, ITvshows } from '../shared/movie.interface';
import { Iuser } from '../user/user.Interface';
import { MoviepostcommentsComponent } from './moviepostcomments.component';
import { VideoplayerComponent } from './videoplayer.component';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css'],
})
export class TvshowDetailsComponent implements OnInit {
  form = inject(FormBuilder).nonNullable.group({
    comment: ['', Validators.required],
  });
  responseMessage!: string;
  showReplies: boolean = false;
  currentPage: any = 3;
  playingNow!: any;
  tvshowDetails: ITvshows = {
    _id: '',
    title: '',
    overview: '',
    releaseDate: '',
    genre: '',
    language: '',
    director: '',
    country: '',
    thumbnail: '',
  };
  showMore = false;
  imageUrl!: string;
  movieId!: string;
  mayLike!: ITvshows[];
  userId!: string;
  commentsList: any = [];
  repliesList: any = [];
  dialogServiceSub!: Subscription;
  isOwnner: boolean = false;
  episodes!: any;
  loadvideo: boolean = false;
  constructor(
    private tvshowService: TvshowslistService,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private ngxLoader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private dialogService: DialogService,
    private globalState: GlobalstateService,
    private commentService: CommentsService,
    private episodeService: EpisodeService
  ) {
    this.movieId = this.route.snapshot.paramMap.get('tvId') as string;
    this.userId = this.globalState.userId.value.id;
    this.fetchEpisodes();
  }

  ngOnInit(): void {
    this.tvshowService.getTvshowById(this.movieId).subscribe((res) => {
      this.tvshowDetails = res.data;
    });
    this.tvshowService.getAllTvshows().subscribe((res) => {
      this.mayLike = res.data;
    });
    this.refreshCommnts();
  }

  fetchEpisodes() {
    this.episodeService.getEpisodesTvshowById(this.movieId).subscribe((res) => {
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

  addReply(commentId: string) {
    this.matDialog.open(MoviepostcommentsComponent, {
      width: '600px',
      maxWidth: '800px',
      height: 'auto',
      hasBackdrop: true,
      maxHeight: '700px',
      data: {
        commentId: commentId,
        userId: this.userId,
      },
    });
  }
  onsubmit() {
    this.ngxLoader.start();
    const data = {
      userId: this.userId,
      movieId: this.tvshowDetails._id,
      comment: this.form.value.comment,
    };
    this.commentService.addComment(data as ImovieComment).subscribe({
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
          this.refreshCommnts();
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
        this.form.reset();
      },
    });
  }

  deleteComment(commentId: string) {
    this.dialogService
      .openConfirmDialog('Are you sure to delete this Comment ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxLoader.start();
          this.commentService.deleteComment(commentId).subscribe({
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
                this.refreshCommnts();
              }
            },
            error: (error) => {
              this.ngxLoader.stop();
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
              this.ngxLoader.stop();
            },
          });
        }
      });
  }

  deleteReply(commentId: string, replyId: string) {
    this.dialogService
      .openConfirmDialog('Are you sure to delete this Comment ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxLoader.start();
          this.commentService.deleteReply(commentId, replyId).subscribe({
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
                this.refreshCommnts();
              }
            },
            error: (error) => {
              this.ngxLoader.stop();
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
              this.ngxLoader.stop();
            },
          });
        }
      });
  }

  refreshCommnts() {
    this.commentService.getCommentsById(this.movieId).subscribe((res) => {
      this.commentsList = res.data.reverse();
    });
  }

  showRepliesFunc() {
    this.refreshCommnts();
    this.showReplies = !this.showReplies;
  }
  loadMore() {
    this.currentPage += 5;
  }
  indexTracker() {}
  @ViewChild('videoPlayer', { static: true }) videoPlayer: any;

  playVideo(episodeId: string) {
    this.episodeService
      .getEpisodeTvshowById(this.movieId, episodeId)
      .subscribe((res) => {
        this.matDialog.open(VideoplayerComponent, {
          width: '600px',
          maxWidth: '800px',
          height: 'auto',
          hasBackdrop: true,
          maxHeight: '700px',
          data: {
            videourl: res.data.videourl,
          },
        });
      });
  }
}
