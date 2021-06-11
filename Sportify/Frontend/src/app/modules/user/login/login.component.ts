import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationResponse } from 'src/app/models/AuthenticationResponse';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  invalid:boolean=false;
  constructor(private loginService:LoginService,private formBuilder:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      userName:["",[Validators.required]],
      password:["",[Validators.required]]
    })
  }
  login(){
    let log:Login=this.form.value;
    console.log(log)
      this.loginService.login(log).subscribe(re=>{
        let response:AuthenticationResponse = re as AuthenticationResponse;
        this.loginService.logged=true;
        this.loginService.addToken(response.jwt);
        this._router.navigateByUrl("/second")

      },
      error=>{
            this.invalid=true;
      })
  }
}
