import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CoversComponent } from './covers/covers.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { PublishformComponent } from './publishform/publishform.component';
import { FormComponent } from './form/form.component';
import { RoyaltyCalComponent } from './royalty-cal/royalty-cal.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/package.component';
import { StepsComponent } from './steps/steps.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { ManuscriptComponent } from './manuscript/manuscript.component';
import { BookListComponent } from './book-list/book-list.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    SplashScreenComponent,
    MainNavComponent,
    SidenavbarComponent,
    CoversComponent,
    PublishformComponent,
    FormComponent,
    RoyaltyCalComponent,
    PaymentComponent,
    PackageComponent,
    StepsComponent,
    UploadFormComponent,
    ManuscriptComponent,

    BookListComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
