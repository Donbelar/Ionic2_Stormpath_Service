/**
 * Created by Administrator on 11/29/2016.
 */

import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

import {Site_checkPage} from "../site_check/site_check";
import {SiteFeedbackPage} from "../siteFeedback/siteFeedback";


@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',


})
export class WelcomePage {
  username: string = '';

  siteCheckPage = Site_checkPage;
  siteFeedbackPage = SiteFeedbackPage;

  title : string = "Welcome";

  constructor(navParams: NavParams){
    this.username = navParams.get("username");
    console.log(this.username);
  }

}
