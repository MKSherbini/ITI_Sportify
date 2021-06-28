import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Spacevalidator } from 'src/app/models/spacevalidator';
import { AuthenticationRequest } from 'src/app/userOpenApi';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  logInFormGroup: FormGroup;
  invalidMessage: string;

  constructor(private formBuilder: FormBuilder,
    // private loginService: LoginService,
    private auth: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: new FormControl('', [Validators.required, Spacevalidator.noOnlyWithSpace]),
        // , Validators.minLength(5)
        password: new FormControl('', [Validators.required])
        // , Validators.minLength(5)
      })
    });
  }

  get userName() {
    return this.logInFormGroup.get('admin.userName');
  }
  get password() {
    return this.logInFormGroup.get('admin.password');
  }
  OnSubmit() {
    if (this.logInFormGroup.invalid) {
      this.logInFormGroup.markAllAsTouched();
    } else {
      var user: AuthenticationRequest = {
        userName: this.logInFormGroup.get('admin').value.userName,
        password: this.logInFormGroup.get('admin').value.password
      }
      this.auth.login(user);
      // executeAuthentication(this.logInFormGroup.get('admin').value.userName, this.logInFormGroup.get('admin').value.password)
      //   .then(
      //     data => {
      //       this.route.navigateByUrl('/');
      //     }, error => {
      //       this.invalidMessage = 'Invalid UserName and Password';
      //       this.showMessage();
      //     }
      //   );
      console.log(this.logInFormGroup.get('admin').value.password);
      console.log(this.logInFormGroup.get('admin').value.userName);
    }
  }
  showMessage() {
    setTimeout(() => {
      this.invalidMessage = '';
    }, 3000);
  }
}
