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
import { JumbotronComponent } from './components/dashboard/jumbotron/jumbotron.component';
import { AdministrationsComponent } from './dashboard/administrations/administrations.component';
import { SpecialisationsComponent } from './dashboard/specialisations/specialisations.component';
import { PhotosComponent } from './dashboard/photos/photos.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { ProblemsComponent } from './dashboard/problems/problems.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { SafePipe } from './Pipes/safe.pipe';
import { PopupComponent } from './components/dashboard/popup/popup.component';
import { FormsModule } from '@angular/forms';
import { FrontHeaderComponent } from './components/front/front-header/front-header.component';
import { FrontButtonComponent } from './components/front/front-button/front-button.component';
import { ImageHolderComponent } from './components/front/image-holder/image-holder.component';
import { FrontTitleComponent } from './components/front/front-title/front-title.component';
import { FrontCardComponent } from './components/front/front-card/front-card.component';
import { FrontGelleryComponent } from './components/front/front-gellery/front-gellery.component';
import { FrontFooterComponent } from './components/front/front-footer/front-footer.component';
import { FrontNewsletterComponent } from './components/front/front-newsletter/front-newsletter.component';
import { FrontFormControlComponent } from './components/front/front-form-control/front-form-control.component';
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
    SettingsComponent,
    SafePipe,
    PopupComponent,
    FrontHeaderComponent,
    FrontButtonComponent,
    ImageHolderComponent,
    FrontTitleComponent,
    FrontCardComponent,
    FrontGelleryComponent,
    FrontFooterComponent,
    FrontNewsletterComponent,
    FrontFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
