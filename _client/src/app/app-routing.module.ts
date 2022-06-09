import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import {HomeComponent} from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectComponent } from './pages/project/project.component';
import { LoginComponent } from './pages/login/login.component';
import { FrontComponent } from './pages/front/front.component';
// import { AdminLoginComponent } from './pages/admin/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes: Routes = [
  {path:"",component:FrontComponent, children:[
    {path:"home",component:HomeComponent},
    {path:"contact",component:ContactComponent},
    {path:"projects",component:ProjectsComponent},
    {path:"project/:id",component:ProjectComponent},
    {path:"login",component:LoginComponent},
  ]},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
