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

  getLolNews(){
    this.gamesService.getGameNewsUsingGET(Game.CodeNameEnum.Lol).subscribe(gamenews =>{
      console.log(gamenews.length);
      this.allNews = gamenews;
    })
  }

  getValorantNews(){
    this.gamesService.getGameNewsUsingGET(Game.CodeNameEnum.Valorant).subscribe(gamenews =>{
      this.allNews = gamenews;
    })
  }

  getDota2News(){
    this.gamesService.getGameNewsUsingGET(Game.CodeNameEnum.Dota2).subscribe(gamenews =>{
      this.allNews = gamenews;
    })
  }

  getCodmwNews(){
    this.gamesService.getGameNewsUsingGET(Game.CodeNameEnum.Codmw).subscribe(gamenews =>{
      this.allNews = gamenews;
    })
  }

}