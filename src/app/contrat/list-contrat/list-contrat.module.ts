import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListContratRoutingModule } from './list-contrat-routing.module';
import { ListContratComponent } from './list-contrat.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ListContratComponent],
  imports: [
    CommonModule,
    ListContratRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  
  ]
})
export class ListContratModule { }
