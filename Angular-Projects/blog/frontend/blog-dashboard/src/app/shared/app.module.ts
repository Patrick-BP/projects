import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './home/content.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './user/login.component';
import { SignupComponent } from './user/signup.component';
import { MovieDetailsComponent } from './home/movie-details.component';
import { TvshowDetailsComponent } from './home/tvshow-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotpasswordComponent } from './user/forgotpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';
import { ProfileComponent } from './user/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AttachTokenGuard } from './guards/attach-token.guard';
import { AttachTokenInterceptor } from './attach-token.interceptor';
import { GlobalstateService } from './services/globalstate.service';
import jwt_decode from 'jwt-decode';
import { RoleGuard } from './guards/role.guard';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  PB_DIRECTION,
} from 'ngx-ui-loader';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog.component';
import { ReversePipe } from './shared/reverse.pipe';
import { TruncatePipe } from './shared/truncate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgPipesModule } from 'ngx-pipes';
import { FilterPipe } from './shared/filter.pipe';
import { SearchPipe } from './shared/search.pipe';
import { WelcomemessageComponent } from './welcomemessage.component';


const materialComponents = [
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatTooltipModule,
];

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text: 'Loading...',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  pbColor: '#FF5969',
  bgsColor: '#FF5969',
  fgsColor: '#FF5969',
  fgsType: SPINNER.threeStrings,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
};

const refreshToken = (stateService: GlobalstateService) => {
  return () => {
    const token = localStorage.getItem('@user');
    if (token) {
      const tokendecoded: any = jwt_decode(token);
      stateService.userId.next({id:tokendecoded._id})
      if (tokendecoded.role == 'admin') {
        stateService.isAdmin.next({
          isAdmin: true,
        });
      }
    }
  };
};
const MY_ROUTES: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'user',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AttachTokenGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AttachTokenGuard, RoleGuard],
    data: {
      role: 'admin',
    },
  },

  {path:'**', redirectTo:'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailsComponent,
    TvshowDetailsComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,
    ProfileComponent,
    MatConfirmDialogComponent,
    ReversePipe,
    TruncatePipe,
    SearchPipe,
    WelcomemessageComponent,
    
    
    
    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: refreshToken,
      deps: [GlobalstateService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AttachTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(MY_ROUTES),
    HomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    FormsModule,
    ReactiveFormsModule,
    materialComponents,
    NgPipesModule,
 
 
  ],
  exports: [materialComponents],
})
export class AppModule {}
