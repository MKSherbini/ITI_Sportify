import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/services/news.service';
import { Game, GamesControllerService, NewsDto } from 'src/app/openapi';
@Component({
  selector: 'app-gamenews',
  templateUrl: './gamenews.component.html',
  styleUrls: ['./gamenews.component.css']
})
export class GamenewsComponent implements OnInit {

  
  allNews: NewsDto[];

  constructor(private gamesService: GamesControllerService) { }

  ngOnInit(): void {
    this.gamesService.getGameNewsUsingGET(Game.CodeNameEnum.Lol).subscribe(gamenews =>{
      console.log(gamenews.length);
      this.allNews = gamenews;
    })
  }

}
