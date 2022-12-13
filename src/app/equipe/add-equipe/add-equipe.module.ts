import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEquipeRoutingModule } from './add-equipe-routing.module';
import { AddEquipeComponent } from './add-equipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AddEquipeComponent
  ],
  imports: [
    CommonModule,
    AddEquipeRoutingModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
  ]
})
export class AddEquipeModule { }
