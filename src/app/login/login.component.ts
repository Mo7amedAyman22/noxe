import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  flag:boolean =false;

  constructor(private _AuthService:AuthService, private _Router:Router){}

  loginForm:FormGroup = new FormGroup({
    'email': new FormControl(null,[Validators.required, Validators.email]),
    'password': new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]/)])

  })




  getLoginInfo(loginForm:FormGroup){
    if (loginForm.valid==true)
    {
      this._AuthService.login(loginForm.value).subscribe((data)=>{
        if(data.massege == 'sucess')
        {
          this._Router.navigate(['/home'])
        }
        else{
          this.flag = true;
          
        }
      })
    }
}
}
