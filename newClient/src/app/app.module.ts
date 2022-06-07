import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { DatatableComponent } from './components/dashboard/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontOfficeComponent,
    DashboardComponent,
    HomeComponent,
    FrontHomeComponent,
    DatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
