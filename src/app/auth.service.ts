import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
// import{userData } from './userData';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser:any;

  constructor(private _httpClint:HttpClient) {}

  regisrt(registerFormValue:FormGroup):Observable<any>
  {
    return this._httpClint.post('',registerFormValue)
  }

  login(loginFormValue:FormGroup):Observable<any>
  {
    return this._httpClint.post('',loginFormValue)
  }

  // saveData(fristName , lastName , email ,token)
  // {
  //   let user = new userData(fristName , lastName , email , token)
  //   this.currentUser = user;
  // }

}
