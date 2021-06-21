import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, Routes} from '@angular/router';
import {Spacevalidator} from '../../../models/spacevalidator';
import {AuthenticationService} from '../../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logInFormGroup: FormGroup;
  invalidMessage: string;

  constructor(private formBuilder: FormBuilder,
              // private loginService: LoginService,
              private auth: AuthenticationService,
              private route: Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: new FormControl('', [Validators.required, Validators.minLength(5), Spacevalidator.noOnlyWithSpace]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)])
      })
    });
  }

  get userName(){
    return this.logInFormGroup.get('admin.userName')
  }
  get password(){
    return this.logInFormGroup.get('admin.password')
  }
  OnSubmit() {
    if (this.logInFormGroup.invalid){
      this.logInFormGroup.markAllAsTouched();
    } else {
      this.auth.executeAuthentication(this.logInFormGroup.get('admin').value.userName, this.logInFormGroup.get('admin').value.password)
        .subscribe(
          data => {
            this.route.navigateByUrl('home');
          }, error => {
            this.invalidMessage = 'Invalid UserName and Password';
            this.showMessage();
          }
        );
    }
  }
  showMessage(){
    setTimeout(() => {
      this.invalidMessage = '';
    }, 3000);
  }
}


