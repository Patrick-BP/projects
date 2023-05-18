import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProfileComponent } from '../user/profile.component';
import { MovieDetailsComponent } from './movie-details.component';
import { TvshowDetailsComponent } from './tvshow-details.component';
import { MoviepostcommentsComponent } from './moviepostcomments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgPipesModule } from 'ngx-pipes';
import { VideoplayerComponent } from './videoplayer.component';
import { CatalogComponent } from './catalogMovies.component';
import { FilterPipe } from '../shared/filter.pipe';
import { PlayListComponent } from './play-list.component';
import { CatalogtvshowsComponent } from './catalogtvshows.component';
import { AboutComponent } from './about.component';




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
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'movie/:movieId', component: MovieDetailsComponent },
  { path: 'tvshow/:tvId', component: TvshowDetailsComponent },
  { path: 'filter/movies', component: CatalogComponent },
  { path: 'filter/tvshows', component: CatalogtvshowsComponent },
  { path: 'playlist/:userId', component: PlayListComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    MoviepostcommentsComponent,
    VideoplayerComponent,
    CatalogComponent,
    FilterPipe,
    PlayListComponent,
    CatalogtvshowsComponent,
    AboutComponent,
    

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatButtonModule,
    materialComponents,
    NgPipesModule,
    RouterModule.forChild(MY_Routes),
  ],
  exports: [materialComponents],
})
export class HomeModule {}
