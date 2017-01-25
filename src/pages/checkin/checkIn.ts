/**
 * Created by Administrator on 11/30/2016.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'page-checkIn',
  templateUrl: 'checkIn.html',

})

export class CheckInPage {

  title : string = "Check-in";

  referee : any;

  constructor(){
    this.referee = 'referee1'
  }

}
