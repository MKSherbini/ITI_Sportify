import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News, NewsControllerService, NewsDto } from 'src/app/openapi';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  news: NewsDto;
  addedNews: News;
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private newsService: NewsControllerService) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      title: [" ", [Validators.minLength(6), Validators.required]],
      description: [" ", [Validators.minLength(15), Validators.required]],
      publisher: [" ", [Validators.required]],
      image: [" ", [Validators.required]],
      game: [" ", [Validators.required]],
      date: [" ", [Validators.required]],
      content: [" ", [Validators.minLength(100),Validators.required]]
    })
  }

  onSubmit(): void{
      this.news = this.formGroup.value;
      this.newsService.addNewsUsingPOST(this.news).subscribe(n=>{
          this.addedNews = n;
      })
  }

  


}
