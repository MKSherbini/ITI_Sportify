import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router:Router,private _us:LoginService) {

  }
  canActivate(): boolean {
    if(!this._us.logged){
        this._router.navigateByUrl("/user")
    }
    return true;
  }

}
