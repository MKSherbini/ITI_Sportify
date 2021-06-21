import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GamesControllerService, NewsControllerService, NewsDetailsDto, NewsDto} from 'src/app/openapi';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  articleDetails: NewsDetailsDto;


  constructor(private newsService: NewsControllerService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get("id");
      this.newsService.getNewsUsingGET2(id).subscribe( newsDetails => {
        this.articleDetails = newsDetails;
      });
  })
}
}
