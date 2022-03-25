import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './user/login/login.component';
import { LogoutComponent } from './user/logout/logout.component';
import { MHomeComponent } from './manager/m-home/m-home.component';
import { HomeComponent } from './employee/home/home.component';
import { RequestReimbursementComponent } from './employee/request-reimbursement/request-reimbursement.component';
import { ViewPendingReimbursementsComponent } from './employee/view-pending-reimbursements/view-pending-reimbursements.component';
import { ViewResolvedReimbursementsComponent } from './employee/view-resolved-reimbursements/view-resolved-reimbursements.component';
import { UpdateMyInfoComponent } from './employee/my-info/update-my-info/update-my-info.component';
import { ReimbursementsHttpComponent } from './manager/reimbursements-http/reimbursements-http.component';
import { ResolvedComponent } from './manager/resolved/resolved.component';
import { DeniedComponent } from './manager/denied/denied.component';
import { MyInfoComponent } from './employee/my-info/my-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    MHomeComponent,
    MyInfoComponent,
    RequestReimbursementComponent,
    ViewPendingReimbursementsComponent,
    ViewResolvedReimbursementsComponent,
    UpdateMyInfoComponent,
    ReimbursementsHttpComponent,
    ResolvedComponent,
    DeniedComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]

})
export class AppModule { }
