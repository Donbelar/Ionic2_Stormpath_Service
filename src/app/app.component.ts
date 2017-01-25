import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';

//import { TabsPage } from '../pages/tabs/tabs';

// Peter write
import {LoginPage} from '../pages/login/login';
import {WelcomePage} from '../pages/welcome/welcome';
import {Site_checkPage} from '../pages/site_check/site_check';
import {CheckInPage} from "../pages/checkin/checkIn";
import {FeedbackPage} from "../pages/feedback/feedback";
import {SiteFeedbackPage} from '../pages/siteFeedback/siteFeedback';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

//Peter wirte
rootPage = LoginPage;
//rootPage = WelcomePage;
//rootPage = Site_checkPage;
//rootPage = CheckInPage;
//rootPage = FeedbackPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      // StatusBar.styleDefault();
      // Splashscreen.hide();
    });
  }
}
