import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './Services/user.guard';
import {AddEtudiantToEquipeContratComponent} from "./etudiant/add-etudiant-to-equipe-contrat/add-etudiant-to-equipe-contrat.component";

const routes: Routes = [
  {path: '', component:ContentComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate:[UserGuard],
    children:[
         { path:'list-etudiant',component: ListEtudiantComponent},
         { path:'list-equipe',component: ListEquipeComponent},
         { path:'add-equipe',component: AddEquipeComponent},
         {path:'add-etudiant', component:AddEtudiantComponent},
         {path:'add-etudiant-to-equipe-contrat', component:AddEtudiantToEquipeContratComponent}
        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
