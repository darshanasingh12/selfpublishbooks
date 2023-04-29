import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { OtpComponent } from './otp/otp.component';
import { AloginComponent } from './alogin/alogin.component';
import { AnavComponent } from './anav/anav.component';
import { AddOtpComponent } from './add-otp/add-otp.component';
import { EditOtpComponent } from './edit-otp/edit-otp.component';
import { ApplicationsComponent } from './applications/applications.component';
import { PaymentsComponent } from './payments/payments.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { ManuListComponent } from './manu-list/manu-list.component';
import { ManuscriptsComponent } from './manuscripts/manuscripts.component';
import { ManuDetailsComponent } from './manu-details/manu-details.component';
import { UploadBookComponent } from './upload-book/upload-book.component';
import { BookFormComponent } from './book-form/book-form.component';



@NgModule({
  declarations: [
    AdashboardComponent,
    OtpComponent,
    AloginComponent,
    AnavComponent,
    AddOtpComponent,
    EditOtpComponent,
    ApplicationsComponent,
    PaymentsComponent,
    EditAppComponent,
    ManuListComponent,
    ManuscriptsComponent,
    ManuDetailsComponent,
    UploadBookComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
