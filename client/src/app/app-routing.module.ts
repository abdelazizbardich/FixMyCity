import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// pages
import {HomeComponent} from './pages/home/home.component'
import { ContactComponent } from './pages/contact/contact.component';
import { CentersComponent } from './pages/centers/centers.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"centers",component:CentersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
