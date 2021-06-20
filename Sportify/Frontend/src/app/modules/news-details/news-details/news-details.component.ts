import { Component, OnInit } from '@angular/core';
import { NewsDto } from 'src/app/openapi';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  articleDetails: NewsDto;

  constructor() { }

  ngOnInit(): void {
  }

}
