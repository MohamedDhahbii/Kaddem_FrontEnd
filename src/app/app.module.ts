import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { authInterceptorProviders } from './Services/auth.Interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEquipeComponent } from './equipe/list-equipe/list-equipe.component';
import { AddEquipeComponent } from './equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './equipe/update-equipe/update-equipe.component';
import { AddEtudiantToEquipeContratComponent } from './etudiant/add-etudiant-to-equipe-contrat/add-etudiant-to-equipe-contrat.component';


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
    ListEquipeComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    AddEtudiantToEquipeContratComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
