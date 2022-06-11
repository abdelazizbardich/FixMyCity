import { APIInterceptor } from './Interceptors/api.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { DatatableComponent } from './components/dashboard/datatable/datatable.component';
import { LoginComponent } from './Auth/login/login.component';
import { AuthComponent } from "./Auth/auth.component";
import { ProfileComponent } from './dashboard/profile/profile.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AdministrationsComponent } from './dashboard/administrations/administrations.component';
import { SpecialisationsComponent } from './dashboard/specialisations/specialisations.component';
import { PhotosComponent } from './dashboard/photos/photos.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ProblemsComponent } from './dashboard/problems/problems.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    DashboardComponent,
    HomeComponent,
    FrontHomeComponent,
    DatatableComponent,
    LoginComponent,
    AuthComponent,
    ProfileComponent,
    JumbotronComponent,
    AdministrationsComponent,
    SpecialisationsComponent,
    PhotosComponent,
    ReportsComponent,
    ProblemsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
