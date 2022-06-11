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
    {path:"", component: FrontHomeComponent}
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
    {path:"administrations",component:AdministrationsComponent},
    {path:"problems",component:ProblemsComponent},
    {path:"settings",component:SettingsComponent},
    {path:"specialisations",component:SpecialisationsComponent},
    {path:"specialisation/:id",component:SpecialisationsComponent},
    // {path:"photos",component:PhotosComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
