/**
 * Created by Administrator on 11/30/2016.
 */

import { Component } from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',

})

export class FeedbackPage {

  title : string = "Feedback";
  referee : any;

  constructor(){
    this.referee = 'referee1';
  }

}
