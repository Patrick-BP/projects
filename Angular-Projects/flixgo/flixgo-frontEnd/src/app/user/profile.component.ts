import { Component, DoCheck, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { GlobalstateService } from '../services/globalstate.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { IProfile, Iuser, IUserLogedin } from './user.Interface';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { DialogService } from '../services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, DoCheck, OnDestroy {
  profileInit?:string;
  profilepic?:string;
  userInfo!: IUserLogedin;
  responseMessage: string = '';
userInfosub!: Subscription;
editProfilesub!:Subscription;
dialogServiceSub!:Subscription;
userServiceSub!:Subscription
  form = inject(FormBuilder).nonNullable.group({
    firstname: [''],
    lastname: [''],
    email: [''],
  });
  constructor(
    private globalstate: GlobalstateService,
    private ngxloader: NgxUiLoaderService,
    private snackbar: SnackbarService,
    private userService: UserService,
    private dialogService: DialogService,
    private route: Router
  ) {
 
    this.userInfosub = globalstate.userInfo.subscribe((state) => {
      this.form.patchValue(state);
      this.userInfo = state;
if(this.userInfo.imgUrl){
  this.profilepic = this.userInfo.imgUrl
}else{
  this.profilepic = 'assets/img/profilepic.png'
}
       
    });
  
  }
    ngOnInit(): void {
   
  }
  ngOnDestroy(): void {
    this.userInfosub.unsubscribe();
   
  }

  onsubmit() {
  
    this.ngxloader.start();
    const userId = this.globalstate.userId.value;
    
    const formData = this.form.value;
    const data = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
    };
   this.editProfilesub = this.userService.editProfile(userId.id, data as IProfile).subscribe({
      next: (res) => {
        if (res.error == true) {
          this.responseMessage = res.message;
          this.snackbar.openSnackBar(
            this.responseMessage,
            GlobalConstants.error
          );
        } else {
          this.responseMessage = res.message;

          this.snackbar.openSnackBar(this.responseMessage, '');
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
        this.globalstate.userInfo.next({
          ...this.globalstate.userInfo.value,
          firstname: this.form.value.firstname as string,
          lastname: this.form.value.lastname as string,
          email: this.form.value.email as string,
        });
      },
    });
  }
  uploadPicFunc(e:any){
    
    this.ngxloader.start();
    const data = new FormData();
    const file = <File>e.target?.files[0];
    const filename = Date.now() + file.name;

    data.append("image", file, filename);
    this.userService.uploadProfile(this.userInfo._id, data).subscribe({
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
      this.refreshuser()
    },

  })
 
  }

  refreshuser(){
    this.userService.getUser(this.userInfo._id).subscribe(res=>{
      this.globalstate.userInfo.next({
        ...this.globalstate.userInfo.value,
        ...res.data
      });
    });
    
  };

  deleteProfile(){
    this.dialogServiceSub = this.dialogService
        .openConfirmDialog('Are you sure to Delete your account?')
        .afterClosed()
        .subscribe((res) => {
          if (res == true) {
            this.ngxloader.start();
           const data = {isActive:false}
           this.userServiceSub = this.userService.deleteAccount(this.userInfo._id, data).subscribe({
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
                  localStorage.clear();
                  this.route.navigate(['/'])
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
        });
  }
  ngDoCheck(): void {}
}
