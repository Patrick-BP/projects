import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { AllPostComponent } from './posts/all-post/all-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { StorageModule} from '@angular/fire/storage';
import { PostService } from './services/post.service';



import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CategoriesComponent,
    NewPostComponent,
    AllPostComponent,
 
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    CommonModule,
    BrowserAnimationsModule, 
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() 

  ],
  providers: [PostService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
