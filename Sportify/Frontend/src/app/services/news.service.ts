import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private _httpClient:HttpClient) { }

  get():Observable<any>{
    return this._httpClient.get("");
   }
}
