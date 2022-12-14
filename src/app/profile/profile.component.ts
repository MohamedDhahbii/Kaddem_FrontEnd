import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Services/etudiant.service';
import Swal from 'sweetalert2';
import { LoginService } from '../Services/login.service';
import { EquipeService } from '../Services/equipe-service';
import { DepartmentsService } from '../Services/departments.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  nbEtudiant !:number;
  nbEquipe !:number;
  nbDept !:number;

  



  user :any = null;

  constructor(private etudiant : EtudiantService, private login: LoginService, private equipe : EquipeService
    
    , private dept : DepartmentsService) { }

  ngOnInit(): void {
     this.countEtudiant();
     this.countEquipe();
     this.countDept();

    this.user = this.login.getUser();
  }


  countEtudiant(){

    this.etudiant.getCountEtudiant().subscribe(
      (data:any)=>{
        this.nbEtudiant = data;
        //console.log(this.nbEtudiant);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  };


  countEquipe(){
    this.equipe.getCountEquipe().subscribe(
      (data:any)=>{
        this.nbEquipe = data;
       
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  };



  countDept(){
    this.dept.getCountDept().subscribe(
      (data:any)=>{
        this.nbDept = data;

      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  };

}
