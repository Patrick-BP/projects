import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DialogService } from '../../services/dialog.service';
import { GlobalstateService } from '../../services/globalstate.service';
import { SnackbarService } from '../../services/snackbar.service';
import { IManageuser } from '../../shared/movie.interface';
import { GlobalConstants } from '../../shared/global-constants';
import { Iuser } from '../../user/user.Interface';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usersdashboard',
  templateUrl: './usersdashboard.component.html',
  styleUrls: ['./usersdashboard.component.css'],
})
export class UsersdashboardComponent implements OnInit, OnDestroy {
  responseMessage!: string;
  usersearchInput!: string;
  userList!: Iuser[];
  usersList!: IManageuser[];
  usersListSub!: Subscription;
  userServiceSub!: Subscription;
  dialogServiceSub!: Subscription;

  constructor(
    private globalState: GlobalstateService,
    private userService: UserService,
    private snackbar: SnackbarService,
    private dialogService: DialogService,
    private ngxloard: NgxUiLoaderService
  ) {}

  ngOnInit(): void {
    this.usersListSub = this.globalState.usersList.subscribe((state) => {
      this.usersList = state;
    });
    this.userstable();
    console.log('ngoninit', this.usersList);
  }
  changeRoleFunc($event: any) {
    this.dialogServiceSub = this.dialogService
      .openConfirmDialog('Are you sure to change this User Role ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxloard.start();

          this.userServiceSub = this.userService
            .disableUser($event.target.name, { role: $event.target.value })
            .subscribe({
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
                  this.userstable();
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
  userDisactivetedFunc($event: any) {
    console.log($event.target.value);
    this.dialogServiceSub = this.dialogService
      .openConfirmDialog('Are you sure to Activata or Disactivate this User ?')
      .afterClosed()
      .subscribe((res) => {
        if (res == true) {
          this.ngxloard.start();
          let data = {};
          if ($event.target.checked) {
            data = { isActive: true };
          } else {
            data = { isActive: false };
          }

          this.userServiceSub = this.userService
            .disableUser($event.target.value, data)
            .subscribe({
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
                  this.userstable();
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
  userstable() {
    this.userServiceSub = this.userService.getAllUsers().subscribe((res) => {
      this.globalState.usersList.next(res.data as IManageuser[]);
    });
  }

  indexTracker() {}
  ngOnDestroy(): void {
    this.usersListSub.unsubscribe();
    this.userServiceSub.unsubscribe();
  }
}
