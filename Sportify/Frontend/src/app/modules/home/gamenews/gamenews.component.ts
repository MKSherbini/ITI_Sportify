import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-gamenews',
  templateUrl: './gamenews.component.html',
  styleUrls: ['./gamenews.component.css']
})
export class GamenewsComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _newsService:NewsService) { }

  ngOnInit(): void {
  }

}
