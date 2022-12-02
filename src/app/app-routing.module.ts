import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDepartmentsComponent } from './departments/add-departments/add-departments.component';
import { ListDepartmentsComponent } from './departments/list-departments/list-departments.component';
import { UpdateDepartmentsComponent } from './departments/update-departments/update-departments.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './Services/user.guard';

const routes: Routes = [
  {path: '', component:ContentComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate:[UserGuard],
    children:[
         { path:'list-etudiant',component: ListEtudiantComponent},

         {path:'add-etudiant', component:AddEtudiantComponent},
         {path:'profile', component:ProfileComponent},

         { path:'list-equipe',component: ListEquipeComponent},
         { path:'add-equipe',component: AddEquipeComponent},
         {path:'add-etudiant', component:AddEtudiantComponent},
         { path:'add-department',component: AddDepartmentsComponent},
         {path:'list-department', component:ListDepartmentsComponent},
         { path:'update-department/:id', component:UpdateDepartmentsComponent}

        ]},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
