import { FrontReportComponent } from './front-office/front-report/front-report.component';
import { FrontReportsComponent } from './front-office/front-reports/front-reports.component';
import { FrontContactComponent } from './front-office/front-contact/front-contact.component';
import { AdminGuard } from './guards/role/admin.guard';
import { ProblemsComponent } from './dashboard/problems/problems.component';
import { SpecialisationsComponent } from './dashboard/specialisations/specialisations.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { AdministrationsComponent } from './dashboard/administrations/administrations.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PhotosComponent } from './dashboard/photos/photos.component';
import { AuthComponent } from './Auth/auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProfileComponent } from './dashboard/profile/profile.component';
const routes: Routes = [
  {path:"", component: FrontOfficeComponent, children:[
    {path:"", component: FrontHomeComponent},
    {path:"contact",component:FrontContactComponent},
    {path:"reports",component:FrontReportsComponent},
    {path:"report/:id",component:FrontReportComponent},
  ]},
  {
    path:"auth",component:AuthComponent, children:[
      {path:"login",component: LoginComponent}
    ]
  },
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:"",component:HomeComponent},
    {path:"profil",component:ProfileComponent},
    {path:"reports",component:ReportsComponent},
    {path:"administrations",component:AdministrationsComponent,canActivate:[AdminGuard]},
    {path:"problems",component:ProblemsComponent,canActivate:[AdminGuard]},
    // {path:"settings",component:SettingsComponent,canActivate:[AdminGuard]},
    {path:"specialisations",component:SpecialisationsComponent,canActivate:[AdminGuard]},
    {path:"specialisation/:id",component:SpecialisationsComponent,canActivate:[AdminGuard]},
    // {path:"photos",component:PhotosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
