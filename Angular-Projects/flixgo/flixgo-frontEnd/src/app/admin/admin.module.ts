import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Router, RouterModule, Routes } from '@angular/router';
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
import { AddmovieComponent } from './movies/addmovie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditmovieComponent } from './movies/editmovie.component';
import { MatConfirmDialogComponent } from '../shared/mat-confirm-dialog.component';
import { ViewmovieComponent } from './movies/viewmovie.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SearchPipe } from './movies/search.pipe';
import { UsersearchPipe } from './users/usersearch.pipe';
import { AddtvshowComponent } from './tvshows/addtvshow.component';
import { EdittvshowComponent } from './tvshows/edittvshow.component';
import { ViewtvshowComponent } from './tvshows/viewtvshow.component';
import { AddepisodeComponent } from './tvshows/addepisode.component';
import { MoviedashboardComponent } from './movies/moviedashboard.component';
import { TvshowdashboardComponent } from './tvshows/tvshowdashboard.component';
import { UsersdashboardComponent } from './users/usersdashboard.component';
import { NgPipesModule } from 'ngx-pipes';

const materialComponents = [
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatMenuModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSortModule,
  MatToolbarModule,
];

const MY_Routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', component: MoviedashboardComponent },
      { path: 'movies', component: MoviedashboardComponent },
      { path: 'tvshows', component: TvshowdashboardComponent },
      { path: 'users', component: UsersdashboardComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    AddmovieComponent,
    EditmovieComponent,
    ViewmovieComponent,
    SearchPipe,
    UsersearchPipe,
    AddtvshowComponent,
    EdittvshowComponent,
    ViewtvshowComponent,
    AddepisodeComponent,
    MoviedashboardComponent,
    TvshowdashboardComponent,
    UsersdashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MY_Routes),
    materialComponents,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
  ],
  exports: [materialComponents],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  entryComponents: [MatConfirmDialogComponent],
})
export class AdminModule {}
