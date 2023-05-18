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
import { LoginComponent } from './login.component';
import { IchangePassword } from './user.Interface';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styles: [],
})
export class ChangepasswordComponent implements OnDestroy {
  form = inject(FormBuilder).nonNullable.group({
    oldpassword: ['', [Validators.required]],
    newpassword: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(GlobalConstants.passwordRegix),
      ],
    ],
  });
  responseMessage: string = '';
  userServiceSub!:Subscription;
  constructor(
    private ngxloader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private dialogRef: MatDialogRef<ChangepasswordComponent>,
    private dialog: MatDialog,
    private userService: UserService,
    private globalstate: GlobalstateService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {}
  onsubmit() {
    this.ngxloader.start();
    const formData = this.form.value;
    const userId = this.globalstate.userInfo.value._id;
    const data = {
      oldPassword: formData.oldpassword,
      newPassword: formData.newpassword,
    };
    
    this.userServiceSub = this.userService.changePassword(userId, data as IchangePassword).subscribe({
      next: (res) => {
        if (res.error == true) {
          this.responseMessage = res.message;
          this.snackbar.openSnackBar(
            this.responseMessage,
            GlobalConstants.error
          );
        } else {
          this.dialogRef.close();
          this.responseMessage = res.message;
          localStorage.clear();
          this.snackbar.openSnackBar(this.responseMessage, '');
          const dialogConfig = new MatDialogConfig();
          this.dialog.open(LoginComponent, dialogConfig);
          this.globalstate.resetState()
          this.router.navigate([''])
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
