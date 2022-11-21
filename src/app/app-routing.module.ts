import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserGuard } from './Services/user.guard';

const routes: Routes = [
  {path: '', component:ContentComponent},
  {path : 'login', component:LoginComponent},
  {path : 'dashboard', component:DashboardComponent, canActivate:[UserGuard]},
  {path: 'list-etudiant', component:ListEtudiantComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
