import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEquipeComponent } from 'src/app/equipe/update-equipe/update-equipe.component';

const routes: Routes = [
  //{path:'', component:UpdateEquipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateEtudiantRoutingModule { }
