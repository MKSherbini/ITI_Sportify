import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { RegistrationDto } from 'src/app/models/MatchPrediction';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private _fb: FormBuilder, private _us: RegistrationService,private _router:Router) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      userName: ["aa", [Validators.minLength(6), Validators.required]],
      email: ["bb", [Validators.email, Validators.required]],
      password: ["cc", [Validators.minLength(6), Validators.required]]
    })
  }

  saveUser() {
    let registrationDto: RegistrationDto = this.formGroup.value;
    this._us.registerUser(registrationDto).subscribe(e => {
      console.log(e);
      console.log("success")
      this._router.navigateByUrl("/user")
    },
      e => {
        console.log("error")
      });
  }

}
