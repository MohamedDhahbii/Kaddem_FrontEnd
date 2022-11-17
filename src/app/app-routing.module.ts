import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path: '', component:ContentComponent},
  {path: 'list-etudiant', component:ListEtudiantComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
