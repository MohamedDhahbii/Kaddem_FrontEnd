import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AddEtudiantRoutingModule } from './add-etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    AddEtudiantComponent,
  ],
  imports: [
   // BrowserModule,
    CommonModule,
    AddEtudiantRoutingModule,
   // HttpClientModule,
    FormsModule,
   // BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ]
})
export class AddEtudiantModule { }
