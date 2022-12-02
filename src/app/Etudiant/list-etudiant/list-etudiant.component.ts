import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {


  etudiants : any=[];



  etudiantData={
    id:'',
    nom:'',
    prenom:'',
    opt:'',
    departement:'',
  };


  constructor(private etudiant : EtudiantService) { }

  ngOnInit(): void {
    this.getListEtudiant();
  }


  getListEtudiant(){
    this.etudiant.getEtudiant().subscribe(
      (data:any)=>{
        this.etudiants = data;
        console.log(this.etudiants);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des deonnées', 'error');
      }
    )
  }



  details(etud:any){
    this.etudiantData = etud;
  }


  /*updateEtudiant(){
    this.etudiant.updateEtudiant(this.etudiantData).subscribe(
      (data)=>{

        console.log(data);
        
      },
      (error)=>{
       console.log(error);

        
      }
    );
  }*/


  deleteEtudiant(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.etudiant.deleteEtudiant(id).subscribe(
          (data)=>{
           
            Swal.fire('Succé', 'Etudiant supprimée avec succé', 'success'); 
            window.location.reload();
          },
          
          (error)=>{
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
    
          }
        );
        
      }
     });

    }
  



}
