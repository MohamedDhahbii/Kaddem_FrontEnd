import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEtudiantRoutingModule } from './list-etudiant-routing.module';
//import { ListEtudiantComponent } from './list-etudiant.component';
//import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
   // ListEtudiantComponent,
  ],
  imports: [
    CommonModule,
    ListEtudiantRoutingModule,
   // NgxPaginationModule,
  ]
})
export class ListEtudiantModule { }
