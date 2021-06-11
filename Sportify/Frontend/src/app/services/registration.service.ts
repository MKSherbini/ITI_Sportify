import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RegistrationDto } from '../models/MatchPrediction';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  registrationUrl:string=environment.RegistationUrl;

  constructor(private _http:HttpClient) { }

  registerUser(obj:RegistrationDto){
     return this._http.post(this.registrationUrl,obj);
  }
  
}
