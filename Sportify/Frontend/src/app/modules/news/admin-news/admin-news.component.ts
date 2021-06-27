import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { News, NewsControllerService, NewsDto } from 'src/app/openapi';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.component.html',
  styleUrls: ['./admin-news.component.css']
})
export class AdminNewsComponent implements OnInit {

  news: NewsDto;
  addedNews: News;
  
  constructor(private newsService: NewsControllerService, public datepipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
      this.newsService.addNewsUsingPOST(this.news).subscribe(n=>{
          this.addedNews = n;
      })
  }

  setNewsTitle(title:string):void{
    this.news.title = title;
  }

  setNewsdesc(desc:string):void{
    this.news.description = desc;
  }

  setNewspub(pub:string):void{
    this.news.publisher = pub;
  }

  setNewsContent(cont:string){
    this.news.content = cont;
  }

  setNewsDate(date:string){
    this.news.date = date;
  }
    
  setNewsGame(game:string){
    this.news.game = game;
  }

  setNewsImage(img:string){
    this.news.image = img;
  }

  transformDate(date: Date){
    let newsDate = this.datepipe.transform(date, 'yyyy-MM-dd');
    this.setNewsDate(newsDate);
  }
}
