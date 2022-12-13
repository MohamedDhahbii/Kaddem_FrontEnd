import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contrat } from 'src/app/Models/Contrat';
import { Etudiant } from 'src/app/Models/Etudiant';
import { ContratService } from 'src/app/Services/contrat.service';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-contrat-assign-etudiant',
  templateUrl: './add-contrat-assign-etudiant.component.html',
  styleUrls: ['./add-contrat-assign-etudiant.component.css']
})
export class AddContratAssignEtudiantComponent implements OnInit {
  idE = 0;
  contrat: Contrat = new Contrat();
  etudiant: Etudiant = new Etudiant();
  min = 100;
  max = 99999;
  constructor(private route:ActivatedRoute, private contratService:ContratService, private etudiantService:EtudiantService, private router : Router) { }

  
  ngOnInit(): void {
    this.idE = this.route.snapshot.params['idE'];
    
    this.etudiantService.getSingleEtudiant(Number(this.idE)).subscribe(
      (data:any)=>{
        this.etudiant = data;
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
    )
    this.contrat.etudiant = this.etudiant;
  }


  
  addContrat(f:any){
    console.log(f);
    let ctr:Contrat;
    ctr = f;
    this.contratService.addContratAssignEtudiant(this.contrat, Number(this.idE)).subscribe(
      (data:any)=>{
        console.log(data)
        if (data == null){
          Swal.fire('Erreur !', 'cet etudiant a déja un contrat en cours', 'error');
          this.router.navigate(['/dashboard/list-etudiant']);
        }
        else{
          Swal.fire('Succés', `contrat ajouté au etudiant ${this.etudiant.prenom} avec succés`, 'success');
        }
        
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );




  }

}
