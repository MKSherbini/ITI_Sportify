import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, RouterModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  exports:[
    HeaderComponent,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
