import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';
@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  title = 'AngularWebApplication';
  public isAuthenticated:boolean;
  constructor(public oktaAuth:OktaAuthService) {
    this.isAuthenticated=false;
    this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated:boolean)=>
            this.isAuthenticated=isAuthenticated
          );
   }                                 //Line 14 isAuthenticated is same as line 15 right side isAuthenticated

  async ngOnInit(){
    this.isAuthenticated=await this.oktaAuth.isAuthenticated();
  }
  login(){
    this.oktaAuth.loginRedirect();
  }
  logout(){
    this.oktaAuth.logout('/');
  }
}
