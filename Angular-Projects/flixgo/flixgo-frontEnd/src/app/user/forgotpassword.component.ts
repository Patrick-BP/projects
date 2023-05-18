import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';

import { Subscription } from 'rxjs';
import { GlobalstateService } from '../services/globalstate.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styles: [],
})
export class ForgotpasswordComponent implements OnDestroy {
  form = inject(FormBuilder).nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.pattern(GlobalConstants.emailRegix)],
    ],
  });
  responseMessage: string = '';
  userServiceSub!: Subscription
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<ForgotpasswordComponent>,
    private ngxService: NgxUiLoaderService,
    private globalstate: GlobalstateService
  ) {}
  ngOnDestroy(): void {

  }

 
  onsubmit() {
    this.ngxService.start();
    const formData = this.form.value;
    const data = { email: formData.email };

    this.userServiceSub = this.userService.forgotPassword(data as Object).subscribe({
      next: (res) => {
        this.dialogRef.close();
        this.snackbarService.openSnackBar(res.message, '');
        const dialogConfig = new MatDialogConfig();
        this.dialog.open(LoginComponent, dialogConfig);
        localStorage.clear();
        this.globalstate.resetState()
        
      },
      error: (error) => {
        this.ngxService.stop();
        if (error.error?.message) {
          this.responseMessage = error.error?.message;
        } else {
          this.responseMessage = GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(
          this.responseMessage,
          GlobalConstants.error
        );
      },
      complete: () => {
        this.ngxService.stop();
        
      },
    });
  }
}
