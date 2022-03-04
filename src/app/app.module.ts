import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { WarningAlertComponent } from './Alerts/warning-alert/warning-alert.component';
import { InfoAlertComponent } from './Alerts/info-alert/info-alert.component';
import { SuccessAlertComponent } from './Alerts/success-alert/success-alert.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { PostsReducer } from './store/posts.reducer';
import { NewPostComponent } from './new-post/new-post.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    WarningAlertComponent,
    InfoAlertComponent,
    SuccessAlertComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ blog : PostsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
