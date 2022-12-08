import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/Models/Equipe';
import { Etudiant } from 'src/app/Models/Etudiant';
import { DepartmentsService } from 'src/app/Services/departments.service';
import { EquipeService } from 'src/app/Services/equipe-service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-etudiant-assign-equipe-departement',
  templateUrl: './add-etudiant-assign-equipe-departement.component.html',
  styleUrls: ['./add-etudiant-assign-equipe-departement.component.css']
})
export class AddEtudiantAssignEquipeDepartementComponent implements OnInit {
  idD = 0;
  etudiantData={
    nom:'',
    prenom:'',
    opt:'',
    departement:
    {
      id:'',
    },
    equipe : []
  };

  etudiant : Etudiant = new Etudiant();
  equipe1 : Equipe = new Equipe();
  equipe : Equipe = new Equipe();


  department:any;
  equipes:any=[];
  constructor(private route:ActivatedRoute, private etudiantService:EtudiantService, private departmentsService : DepartmentsService, private equipeService:EquipeService, private router : Router) { }

  ngOnInit(): void {
    
    this.idD = this.route.snapshot.params['idD'];

    this.departmentsService.getDepartment(this.idD).subscribe(
      (data)=>{
        this.department = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur','Erreur récuperation de données', 'error');
      }
    )
    this.etudiant.departement = this.department;

    this.equipeService.getEquipes().subscribe(
      (data)=>{
        this.equipes = data;
        console.log(this.equipes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur','Erreur récuperation de données', 'error');
      }
    )
  }

  addEtudiant(){


    if(this.etudiantData.nom.trim() == '' || this.etudiantData.prenom.trim() == ''){
      Swal.fire('Erreur !', 'Erreur les valeur sont', 'error');
    }
    
    this.equipeService.getSingleEquipe(this.equipe1.id).subscribe(
      (data)=>{
        this.equipe = data;
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur','Erreur récuperation de données', 'error');
      }
    )

    // this.etudiant.equipe?.push(this.equipe);


    this.etudiantService.addAndAssignEtudiantToEquipeAndDepartement(this.etudiant, Number(this.equipe1.id), this.idD).subscribe(
      (data:any)=>{
      
        Swal.fire('Succès', 'Etudiant ajouté avec succés', 'success');
        
        console.log(data);



      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );


      


  }

}
