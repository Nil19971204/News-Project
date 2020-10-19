import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EntryComponent } from './entry/entry.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {OktaAuthModule} from '@okta/okta-angular';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    DashboardComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    OktaAuthModule.initAuth({
      issuer:'https://AngularWebApplication/oauth2/default',
      redirectUri:'http://localhost:4200/implicit/callback',
      clientId:'0oamxzuf7gL6BwnY64x6'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
