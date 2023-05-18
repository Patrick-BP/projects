import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { GlobalstateService } from '../services/globalstate.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { SignupComponent } from './signup.component';
import { Icredentials, Ilogin, IUserLogedin } from './user.Interface';
import jwt_decode from 'jwt-decode';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit, OnDestroy {
  form = inject(FormBuilder).nonNullable.group({
    email: [
      '',
      [Validators.required, Validators.pattern(GlobalConstants.emailRegix)],
    ],
    password: ['', Validators.required],
  });
  isloged!: Ilogin;
  user!: IUserLogedin;
  responseMessage: string = '';
  issignedinSub!:Subscription
  userInfoSub!:Subscription
  signInSub!:Subscription
  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<LoginComponent>,
    private ngxService: NgxUiLoaderService,
    private globalstate: GlobalstateService
  ) {
   
    
  }
  ngOnDestroy(): void {
   
  }

  ngOnInit(): void {}

  onsubmit() {
    this.ngxService.start();
    const formData = this.form.value;
    const data = {
      email: formData.email,
      password: formData.password,
    };

    this.signInSub = this.userService.signIn(data as Icredentials).subscribe({
      next: (res) => {
        const token: any = res.data;
        const tokendecoded: IUserLogedin = jwt_decode(token);
        this.dialogRef.close();
        localStorage.setItem('@user', JSON.stringify({ token: res.data }));
        this.snackbarService.openSnackBar(res.message, '');
        this.globalstate.userId.next({
          id:tokendecoded._id,
        })
        this.globalstate.userInfo.next({
          _id: tokendecoded._id,
          firstname: tokendecoded.firstname,
          lastname: tokendecoded.lastname,
          email: tokendecoded.email,
          role: tokendecoded.role,
          imgUrl: tokendecoded?.imgUrl,
          token: res.data,
        });
        this.userInfoSub = this.globalstate.userInfo.subscribe((state) => {
            this.user = state;
          });
console.log(this.user._id);
        if (tokendecoded.role == 'admin') {
          this.globalstate.isAdmin.next({
            isAdmin: true,
          });

          this.issignedinSub = this.globalstate.issignedin.subscribe((state) => {
            this.isloged = state;
          });
        
        } else {
          this.globalstate.isAdmin.next({
            isAdmin: false,
          });
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
        this.globalstate.issignedin.next({
          islogedin: true,
        });
      },
    });
  }

  forgotpasswordFunc() {
    const dialogConfig = new MatDialogConfig();
    this.dialogRef.close();
    this.dialog.open(ForgotpasswordComponent, dialogConfig);
  }
  signupFunc() {
    const dialogConfig = new MatDialogConfig();
    this.dialogRef.close();
    this.dialog.open(SignupComponent, dialogConfig);
  }
}
