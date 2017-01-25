import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {StormpathConfig} from '../providers/stormpath-config';
import {RegistrationFormModel} from '../stormpath/stormpath.service';
import 'rxjs/add/operator/map';
import {Stormpath, LoginFormModel} from '../stormpath/stormpath.service';

/*
  Generated class for the StormpathService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class StormpathService {

  items: any;

  constructor(public http: Http, public config: StormpathConfig) {
    console.log('Hello StormpathService Provider');
  }

  //---Authentication function to stormpath.com
  authUser(form: LoginFormModel): boolean{
    var concatenated: string = form.username + ':' + form.password;
    var encrypt_value = btoa(concatenated);

    console.log(encrypt_value);

    var data = JSON.stringify({
      type: 'basic',
      value: encrypt_value
    });

    this.http.post(this.config.loginUri, data, this.getHeaders).map(res=>res.json()).subscribe(data => {
      console.log("Got data");
      this.items=JSON.parse(data);
    });

    if (this.items){
      alert('Success'); return true;
    }else{
      alert('Error'); return false;
    }
  }

  //---Get token function from stormpath site


  //---User register function

  register(username: string, email: string, password: string): boolean{

    var data = JSON.stringify({
      username: username,
      email: email,
      password: password
    });
    var url = '/api/v1/applications/1QrmcDJrrdLuwW7qnGosTX/accounts'
    //this.http.post(this.config.registerUri, data, this.getHeaders).map(res=>res.json()).subscribe(data=>{
    this.http.post(url, data, this.getHeaders).map(res=>res.json()).subscribe(data=>{
      console.log(data); return true;
    }, err=>{
      console.log("Error!:", err.json());
    });
    return false;
  }

  getHeaders(): any{
    var headers = new Headers();
    headers.append('content-type', 'application/json;charset=UTF-8');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Authorization','Basic MlpG');
    let options= new RequestOptions({headers: headers});
    return options;
  }
}
