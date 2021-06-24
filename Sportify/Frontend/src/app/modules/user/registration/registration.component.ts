import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { RegistrationDto } from 'src/app/models/RegistrationDto';
import { RegistrationService } from 'src/app/services/registration.service';
import { AuthenticatingEndPointService, UserDto, UsersResourceService } from 'src/app/userOpenApi';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private _fb: FormBuilder, private _usersResourceService: UsersResourceService,private _router:Router) { }

  ngOnInit(): void {
    this.formGroup = this._fb.group({
      userName: ["",[Validators.minLength(6), Validators.required]],
      email: ["",[Validators.email, Validators.required,Validators.pattern("(.+)@(.+){2,}.(.+){2,}")]],
      password: ["",[Validators.minLength(6), Validators.required]]
    })
  }

  saveUser() {
    let userDto: UserDto = this.formGroup.value;
    this._usersResourceService.saveSelectedUsingPOST(userDto).subscribe(e => {
      console.log(e);
      console.log("success")
      this._router.navigateByUrl("/user")
    },
      e => {
        console.log("error")
      });
  }

}
