import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { CoversComponent } from './covers/covers.component';


import { AuthGuard } from './form/auth.guard';
import { PublishformComponent } from './publishform/publishform.component';

import { FormComponent } from './form/form.component';
import { RoyaltyCalComponent } from './royalty-cal/royalty-cal.component';
import { PaymentComponent } from './payment/payment.component';
import { PackageComponent } from './package/package.component';
import { StepsComponent } from './steps/steps.component';
import { ManuscriptComponent } from './manuscript/manuscript.component';
import { BookListComponent } from './book-list/book-list.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'home', component: HomeComponent},
{ path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent},
{ path: 'dashboard', component: DashboardComponent,canActivate: [AuthguardGuard] },
{path: 'covers', component: CoversComponent,canActivate: [AuthguardGuard]},
{path:'publish', component:PublishformComponent, canActivate: [AuthguardGuard] },
{path:'form', component:FormComponent,canActivate: [AuthguardGuard]},
{path:'royalty', component:RoyaltyCalComponent, canActivate: [AuthguardGuard]},
{path:'payment', component:PaymentComponent, canActivate: [AuthguardGuard]},
{path:'packages' , component:PackageComponent,canActivate: [AuthguardGuard]},
{path:'steps' , component:StepsComponent,canActivate: [AuthguardGuard]},
{path:'manuscript', component:ManuscriptComponent,canActivate: [AuthguardGuard]},
{path:'books',component:BookListComponent,canActivate: [AuthguardGuard]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
