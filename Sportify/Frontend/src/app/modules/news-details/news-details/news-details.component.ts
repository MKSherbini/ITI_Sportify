import {Component, Input, OnInit} from '@angular/core';
import {GamesControllerService, NewsControllerService, NewsDetailsDto, NewsDto} from 'src/app/openapi';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  articleDetails: NewsDetailsDto;
  @Input()
  id: number;

  constructor(private newsService: NewsControllerService) { }

  ngOnInit(): void {
    this.newsService.getNewsUsingGET2(this.id).subscribe( newsDetails => {
      this.articleDetails = newsDetails;
    });
  }
}
