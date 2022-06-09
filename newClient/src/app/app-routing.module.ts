import { AuthComponent } from './Auth/auth.component';
import { LoginComponent } from './Auth/login/login.component';
import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth/auth.guard';
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
    {path:"",component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
