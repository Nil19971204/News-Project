
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OktaAuthGuard,OktaCallbackComponent} from '@okta/okta-angular';
const routes: Routes = [
  {
    path:"",
    component:EntryComponent
  },
  {
    path:"Dashboard",
    component:DashboardComponent,
    canActivate:[OktaAuthGuard]
  },
  {
    path:"implicit/callback",
    component:OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
