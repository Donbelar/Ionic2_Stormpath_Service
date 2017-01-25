import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StormpathService} from "../../providers/stormpath-service";
import {Stormpath, RegistrationFormModel} from '../../stormpath/stormpath.service';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [StormpathService]
})
export class SignupPage {

  protected model: Object;
  protected error: string;
  protected username: string;
  protected email: string;
  protected password: string;


  stormpathService : StormpathService;


  constructor(public navCtrl: NavController, public stormpath: Stormpath, stormpathService: StormpathService) {
    this.stormpathService = stormpathService;
  }


  signup(form: any){
    this.username = form.username;
    this.email = form.email;
    this.password = form.password;

    if(this.stormpathService.register(this.username, this.email, this.password))
    this.navCtrl.pop();
  };
}
