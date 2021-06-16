import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private _httpClient:HttpClient,private _newsService:NewsService) { }

  ngOnInit(): void {
  }

}
