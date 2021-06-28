import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { RegistrationDto } from 'src/app/models/RegistrationDto';
import { RegistrationService } from 'src/app/services/registration.service';
import { AuthenticatingEndPointService, UserDto, UsersResourceService } from 'src/app/userOpenApi';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  formGroup: FormGroup;
  constructor(public dialog: MatDialog,private _fb: FormBuilder, private _usersResourceService: UsersResourceService,private _router:Router) { }

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

      this.openDialog("Thanks for registration")
      this._router.navigateByUrl("/")

    },
      e => {
        console.log("error")
      });
  }

  openDialog(msg:string) {
   this.dialog.open(DialogboxComponent, {
      data: {name: "Registration", msg: msg}
    });
  }
}
function DialogElementsExampleDialog(DialogElementsExampleDialog: any) {

  throw new Error('Function not implemented.');
}

