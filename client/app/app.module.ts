import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/modules';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { JwtModule } from '@auth0/angular-jwt';
import { AttendanceService } from './attendances/attendance.service';
import { EmployeeService } from './employee/employee.service';
import {
  UserService, AuthService,
  AuthGuardLogin, AuthGuardAdmin,
  AppGlobals, BaseService
} from './shared/services';

import { AppComponent } from './app.component';
import { AttendancesComponent } from './attendances/attendances.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendancesComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    EmployeeComponent,
    AttendanceReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    JwtModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [// all are singleton
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    AttendanceService,
    UserService,
    EmployeeService,
    AppGlobals,
    BaseService
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
