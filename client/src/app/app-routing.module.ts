import { FrontReportComponent } from './front-office/front-report/front-report.component';
import { FrontReportsComponent } from './front-office/front-reports/front-reports.component';
import { FrontContactComponent } from './front-office/front-contact/front-contact.component';
import { ProblemsComponent } from './dashboard/problems/problems.component';
import { SpecialisationsComponent } from './dashboard/specialisations/specialisations.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { AdministrationsComponent } from './dashboard/administrations/administrations.component';
// import { SettingsComponent } from './dashboard/settings/settings.component';
// import { PhotosComponent } from './dashboard/photos/photos.component';
import { AuthComponent } from './Auth/auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanAccessGuard } from './guards/can-access.guard';
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
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"",component:HomeComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMIN"]}},
    {path:"profil",component:ProfileComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMINISTRATION","ROLE_ADMIN"]}},
    {path:"reports",component:ReportsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMINISTRATION","ROLE_ADMIN"]}},
    {path:"administrations",component:AdministrationsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMIN"]}},
    {path:"problems",component:ProblemsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMINISTRATION","ROLE_ADMIN"]}},
    // {path:"settings",component:SettingsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMINISTRATION","ROLE_ADMIN"]}},
    {path:"specialisations",component:SpecialisationsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMIN"]}},
    {path:"specialisation/:id",component:SpecialisationsComponent,canActivate:[CanAccessGuard],data:{roles:["ROLE_ADMIN"]}},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
