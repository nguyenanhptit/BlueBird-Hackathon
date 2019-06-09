import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VideoComponent } from './video/video.component';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [UserComponent, VideoComponent, QuestionComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[VideoComponent, QuestionComponent]
})
export class UserModule { }
