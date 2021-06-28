import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeadComponent } from './head/head.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';



import { UserModule } from '../user/user.module';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    HeadComponent
  ],
  imports: [
    CommonModule, RouterModule, HttpClientModule, ReactiveFormsModule, FormsModule, MatButtonToggleModule, UserModule, NewsModule
  ],
  exports: [
    HeaderComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    HeadComponent,
    MatButtonToggleModule
  ]
})
export class SharedModule { }
