import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {


constructor(private _AuthService:AuthService , private _Router:Router){}

  registerForm:FormGroup = new FormGroup({
    'firstName': new FormControl(null,[Validators.required, Validators.minLength(3) , Validators.maxLength(8) ]),
    'lastName': new FormControl(null,[Validators.required, Validators.minLength(3) , Validators.maxLength(8) ]),
    'email': new FormControl(null,[Validators.required, Validators.email]),
    'password': new FormControl(null,[Validators.required , Validators.pattern(/^[A-Z]/)])
  });
flag:boolean = false;

  getRegisterInfo(registerForm:FormGroup){
    if (registerForm.valid==true)
    {
      this._AuthService.regisrt(registerForm.value).subscribe((data)=>{
        if(data.massege == 'sucess')
        {
          this._Router.navigate(['/login'])
        }
        else{
          this.flag = true;
        }
      })
    }


  }

}

