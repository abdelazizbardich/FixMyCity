import { FrontHomeComponent } from './front-office/front-home/front-home.component';
import { HomeComponent } from './dashboard/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfficeComponent } from './front-office/front-office.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:"", component: FrontOfficeComponent, children:[
    {path:"", component: FrontHomeComponent},
    {path:"login", component: FrontHomeComponent}
  ]},
  {path:"dashboard",component:DashboardComponent,children:[
    {path:"",component:HomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
