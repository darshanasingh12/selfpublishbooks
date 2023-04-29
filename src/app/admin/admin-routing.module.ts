import { ApplicationInitStatus, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { AddOtpComponent } from './add-otp/add-otp.component';
import { AloginComponent } from './alogin/alogin.component';
import { ApplicationsComponent } from './applications/applications.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { EditOtpComponent } from './edit-otp/edit-otp.component';
import { ManuscriptsComponent } from './manuscripts/manuscripts.component';

import { OtpComponent } from './otp/otp.component';
import { PaymentsComponent } from './payments/payments.component';
import { UploadBookComponent } from './upload-book/upload-book.component';
import { BookFormComponent } from './book-form/book-form.component';

const routes: Routes = [
  {path:'', component:AloginComponent},
  {path:'admin', component:AloginComponent},
  {path:'adashboard', component:AdashboardComponent},
  {path:'otp', component:OtpComponent},
  {path:'edit/:id', component:EditOtpComponent},
  {path:'add', component:AddOtpComponent},
  {path:'applications',component:ApplicationsComponent},
  {path:'aedit/:id', component:EditAppComponent},
  {path:'payments',component:PaymentsComponent},
  {path:'manuscripts',component:ManuscriptsComponent},
  {path:'book', component:UploadBookComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
