import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {LoginPage} from "../pages/login/login";
import {WelcomePage} from "../pages/welcome/welcome";
import {Site_checkPage} from "../pages/site_check/site_check";
import {CheckInPage} from "../pages/checkin/checkIn";
import {FeedbackPage} from "../pages/feedback/feedback";

import {Ionic2RatingModule} from "ionic2-rating";
import {SiteFeedbackPage} from "../pages/siteFeedback/siteFeedback";
import {SignupPage} from "../pages/signup/signup";

import {Stormpath, LoginService} from '../stormpath/stormpath.service';
import { StormpathConfiguration } from '../stormpath/stormpath.config';
import {StormpathConfig} from '../providers/stormpath-config';
@NgModule({
  declarations: [
    MyApp,

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    LoginPage,
    SignupPage,
    WelcomePage,
    Site_checkPage,
    CheckInPage,
    FeedbackPage,
    SiteFeedbackPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule,
    FormsModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    LoginPage,
    SignupPage,
    WelcomePage,
    Site_checkPage,
    CheckInPage,
    FeedbackPage,
    SiteFeedbackPage
  ],
  providers: [ Stormpath, StormpathConfiguration, StormpathConfig, LoginService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
