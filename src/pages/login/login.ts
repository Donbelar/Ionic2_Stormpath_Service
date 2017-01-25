/**
 * Created by Administrator on 11/29/2016.
 */
import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

import {StormpathService} from '../../providers/stormpath-service';
import {GlobalVars} from "../../providers/global-vars";


import {WelcomePage} from '../welcome/welcome';
import {SignupPage} from '../signup/signup';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Stormpath, LoginFormModel} from '../../stormpath/stormpath.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [StormpathService, GlobalVars, Stormpath]
})


export class LoginPage {

  title: string = "Log In";

  nav: NavController;

  //stormpathService: StormpathService;

  signupPage = SignupPage;

  http: Http;
  protected loginFormModel: LoginFormModel;

  constructor(nav: NavController, public stormpathService: StormpathService, public globalvars: GlobalVars) {
    this.nav = nav;
    globalvars.userStatus = 0;
    this.stormpathService = stormpathService;
    this.loginFormModel = {
      username: '',
      password: ''
    };
  }

  login() {

    if (!this.globalvars.userStatus) {

      var response = this.stormpathService.authUser(this.loginFormModel);

      console.log(response);

      if (response){
        this.globalvars.userStatus = 1;
      }
    }

    console.log('user status is '+ this.globalvars.userStatus);

    if(this.globalvars.userStatus){
      this.nav.push(WelcomePage, {username: this.loginFormModel.username});
    }else{
      console.log('Login Error!!!')
    }

  }

}
