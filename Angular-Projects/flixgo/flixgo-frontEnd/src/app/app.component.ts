import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalstateService } from './services/globalstate.service';
import { LoginComponent } from './user/login.component';
import { IAdmin, Ilogin, Iuser, IUserLogedin } from './user/user.Interface';
import { Router } from '@angular/router';
import { ChangepasswordComponent } from './user/changepassword.component';
import { environment } from 'src/environments/environment';
import { UserService } from './services/user.service';
import jwt_decode from 'jwt-decode';
import { MoviesService } from './services/movies.service';
import { IMovie } from './shared/movie.interface';
import { FormBuilder } from '@angular/forms';
import { WelcomemessageComponent } from './welcomemessage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'client';

  isprofilepic: boolean = false;
  profileInit?: string;
  profilepic?: string;
  isloged!: Ilogin;
  isadmin!: IAdmin;
  islogedSub!: any;
  isAdminSub!: any;
  profileSub!: any;
  userInfo!: Iuser;
  userId!: { id: string };
  moviesList: IMovie[] = [];
  selectedMovie: any;
  searchInput!: string;
  isSearchbtn: boolean = false;
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private ngxService: NgxUiLoaderService,
    private globalstate: GlobalstateService,
    private userService: UserService,
    private movieService: MoviesService
  ) {

    if (localStorage.getItem('@user')) {
      const token = JSON.parse(localStorage.getItem('@user') as string).token;

      this.globalstate.userInfo.next({
        ...this.globalstate.userInfo.value,
        token: token,
      });
      this.userId = this.globalstate.userId.value;
      this.globalstate.issignedin.next({
        islogedin: true,
      });
      movieService.getAllMovies().subscribe((res) => {
        this.moviesList = res.data;
        
      });
      this.refreshuser();
    } else {
      this.globalstate.issignedin.next({
        islogedin: false,
      });

     const dialogConfig = new MatDialogConfig();
    this.dialog.open(WelcomemessageComponent, dialogConfig);
  
    
    }


    this.islogedSub = globalstate.issignedin.subscribe((state) => {
      this.isloged = state;
    });
    this.isAdminSub = globalstate.isAdmin.subscribe((state) => {
      this.isadmin = state;
    });
    globalstate.userId.subscribe((res) => {
      this.userId = res;
    });
 
  }

  ngOnInit(): void {
    this.profileSub = this.globalstate.userInfo.subscribe((state) => {
      if (!state.imgUrl) {
        this.profileInit =
          state?.firstname.charAt(0) + ' ' + state?.lastname.charAt(0);
      } else {
        this.profilepic = state?.imgUrl;
      }
    });
  }

  loginFunc() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.width = "550px";
    this.dialog.open(LoginComponent, dialogConfig);
  }

  logoutFunc() {
    this.ngxService.start();
    localStorage.clear();
    this.globalstate.issignedin.next({
      islogedin: false,
    });
    this.ngxService.stop();
    this.globalstate.isAdmin.next({
      isAdmin: false,
    });
    this.globalstate.resetState();
    this.router.navigate(['']);
  }

  changePasswordFunc() {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ChangepasswordComponent, dialogConfig);
  }
  refreshuser() {
    this.userService.getUser(this.userId.id).subscribe((res) => {
      this.globalstate.userInfo.next({
        ...res.data,
        token: this.globalstate.userInfo.value.token,
      } as IUserLogedin);
    });
  }
  ngOnDestroy(): void {
    this.islogedSub.unsubscribe();
    this.isAdminSub.unsubscribe();
    this.profileSub.unsubscribe();
  }

  search($event: any) {
    
    
  }

  searchbtn() {
    this.isSearchbtn = !this.isSearchbtn;
    this.movieService.getAllMovies().subscribe((res) => {
      this.moviesList = res.data;
      
    });
  }
}
