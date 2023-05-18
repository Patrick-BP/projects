import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { CommentsService } from '../services/comments.service';
import { DialogService } from '../services/dialog.service';
import { GlobalstateService } from '../services/globalstate.service';
import { MoviesService } from '../services/movies.service';
import { RatingService } from '../services/rating.service';
import { SnackbarService } from '../services/snackbar.service';
import { ImovieComment } from '../shared/comments.interface';
import { GlobalConstants } from '../shared/global-constants';
import { IMovie } from '../shared/movie.interface';
import { Iuser } from '../user/user.Interface';
import { MovieplayerComponent } from './movieplayer.component';
import { MoviepostcommentsComponent } from './moviepostcomments.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',

  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  form = inject(FormBuilder).nonNullable.group({
    comment: ['', Validators.required],
  });
  responseMessage!: string;
  isRated: boolean = true;
  showReplies: boolean = false;
  currentPage: any = 3;
  movieDetails: IMovie = {
    _id: '',
    title: '',
    overview: '',
    releaseDate: '',
    genre: '',
    language: '',
    director: '',
    quality: '',
    country: '',
    thumbnail: '',
    videourl: '',
  };
  showMore = false;
  imageUrl!: string;
  videoUrl!: string;
  movieId!: string;
  mayLike!: IMovie[];
  userId!: string;
  commentsList: any = [];
  repliesList: any = [];
  dialogServiceSub!: Subscription;
  isOwnner: boolean = false;
  isfav: boolean = false;

  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private matDialog: MatDialog,
    private ngxLoader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private dialogService: DialogService,
    private globalState: GlobalstateService,
    private commentService: CommentsService,
    private ratingService: RatingService
  ) {
    this.movieId = this.route.snapshot.paramMap.get('movieId') as string;
    this.userId = this.globalState.userId.value.id;

    ratingService.checkRating(this.userId, this.movieId).subscribe((res) => {
      this.isRated = res.data;
    });
  }

  ngOnInit(): void {
    this.movieService.userGetMovieById(this.movieId).subscribe((res) => {
      this.movieDetails = res.data;
    });
    this.movieService.getAllMovies().subscribe((res) => {
      this.mayLike = res.data;
    });
    this.refreshCommnts();
    this.favCheck();
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
      movieId: this.movieDetails._id,
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

  
  getPlayList() {
    this.movieService.getPlayList(this.userId).subscribe((res) => {});
  }
  addToFav() {
    this.isfav = true;
    const data = {
      userId: this.userId,
      movieId: this.movieId,
    };

    this.movieService.addToPlaylist(data).subscribe((res) => {
      this.isfav = true;
    });
    this.favCheck();
  }
  removeToFav() {
    this.isfav = false;
    const data = {
      userId: this.userId,
      movieId: this.movieId,
    };
    this.movieService.removeToPlaylist(data).subscribe((res) => {
      this.isfav = res;
    });
    this.favCheck();
  }
  favCheck() {
    this.isfav = false;
    const data = {
      userId: this.userId,
      movieId: this.movieId,
    };
    this.movieService.checkPlaylist(data).subscribe((res) => {
      this.isfav = res;
    });
  }
  
  rateShown: boolean = false;
  stars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse();
  selectedValue!: any;

  countStar(star: any) {
    this.selectedValue = star;
    const data = {
      userId: this.userId,
      movieId: this.movieId,
      rating: star,
    };

    this.ratingService.addRating(data).subscribe((res) => {});
  }

  rateBtn() {
    this.rateShown = !this.rateShown;
  }

  @ViewChild('videoPlayer', { static: true }) videoPlayer: any;

  playVideo() {
    this.movieService.getMovieById(this.movieId).subscribe(res=>{
      
      this.matDialog.open(MovieplayerComponent, {
        width: '600px',
        maxWidth: '800px',
        height: 'auto',
        hasBackdrop: true,
        maxHeight: '700px',
        data: {
           videourl: res.data.videourl,
        },
      })
    })
       
      
      }
}
