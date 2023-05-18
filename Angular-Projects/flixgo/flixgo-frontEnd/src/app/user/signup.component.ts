import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { GlobalstateService } from '../services/globalstate.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { LoginComponent } from './login.component';
import { Iuser } from './user.Interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent implements OnInit, OnDestroy {
  form = inject(FormBuilder).nonNullable.group({
    firstname: [
      '',
      [Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
    ],
    lastname: [
      '',
      [Validators.required, Validators.pattern(GlobalConstants.nameRegex)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(GlobalConstants.emailRegix)],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(GlobalConstants.passwordRegix),
      ],
    ],
  });
  responseMessage: string = '';
  signupsub!: Subscription;
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<SignupComponent>,
    private ngxService: NgxUiLoaderService
  ) {}
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {}

  signinFunc() {
    const dialogConfig = new MatDialogConfig();
    this.dialogRef.close();
    this.dialog.open(LoginComponent, dialogConfig);
  }
  
  onsubmit() {
    this.ngxService.start();
    const formData = this.form.value;
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email?.toLowerCase(),
      password: formData.password,
    };

    this.signupsub = this.userService.signUp(data as Iuser).subscribe({
      next: (res) => {
        if (res.error == true) {
          this.responseMessage = res.message;
          this.snackbarService.openSnackBar(
            this.responseMessage,
            GlobalConstants.error
          );
        } else {
          this.dialogRef.close();
          this.responseMessage = res.message;
          this.snackbarService.openSnackBar(this.responseMessage, '');
          const dialogConfig = new MatDialogConfig();
          this.dialog.open(LoginComponent, dialogConfig);
        }
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
