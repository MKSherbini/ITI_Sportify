import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  latestMatchesUrl: string = environment.LatestMatchesUrl;

  constructor(private _http:HttpClient) { }

  getLatestMatches(){
    return this._http.get(this.latestMatchesUrl);
  }
}
