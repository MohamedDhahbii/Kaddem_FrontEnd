import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ListEtudiantComponent } from './Etudiant/list-etudiant/list-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './Services/auth.Interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEtudiantComponent } from './Etudiant/add-etudiant/add-etudiant.component';
import { ProfileComponent } from './profile/profile.component';

import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
import { DeleteEquipeComponent } from './equipe/delete-equipe/delete-equipe.component';
import { UpdateEtudiantComponent } from './Etudiant/update-etudiant/update-etudiant.component';
import { AddContratComponent } from './contrat/add-contrat/add-contrat.component';
import { ListContratComponent } from './contrat/list-contrat/list-contrat.component';
import { ModifierContratComponent } from './contrat/modifier-contrat/modifier-contrat.component';

import { DatePipe } from '@angular/common'



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    ContentComponent,
    ListEtudiantComponent,
    DashboardComponent,
    SidebarComponent,
    AddEtudiantComponent,
    ProfileComponent,
    ListEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    DeleteEquipeComponent,
    UpdateEtudiantComponent,
    AddContratComponent,
    ListContratComponent,
    ModifierContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent],
 
  
  
})
export class AppModule { }
