import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipeComponent } from './add-equipe.component';

const routes: Routes = [
  {path:'', component:AddEquipeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEquipeRoutingModule { }
