import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CommentsService } from '../services/comments.service';
import { SnackbarService } from '../services/snackbar.service';
import { ImovieComment, IReply } from '../shared/comments.interface';
import { GlobalConstants } from '../shared/global-constants';

@Component({
  selector: 'app-moviepostcomments',
  templateUrl: './moviepostcomments.component.html',
  styleUrls: ['./moviepostcomments.component.css'],
})
export class MoviepostcommentsComponent {
  responseMessage!: string;
  form = inject(FormBuilder).nonNullable.group({
    comment: ['', Validators.required],
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentsService,
    private ngxLoader: NgxUiLoaderService,
    private dialogRef: MatDialogRef<MoviepostcommentsComponent>,
    private snackbar: SnackbarService
  ) {}

  onsubmit() {
    this.ngxLoader.start();
    const data = {
      userId: this.data.userId,
      commentId: this.data.commentId,
      message: this.form.value.comment,
    };

    this.commentService.addReply(data as IReply).subscribe({
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
