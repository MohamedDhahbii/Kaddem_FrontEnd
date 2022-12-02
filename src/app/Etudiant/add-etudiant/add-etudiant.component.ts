import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EtudiantService } from 'src/app/Services/etudiant.service';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  etudiantData={
    nom:'',
    prenom:'',
    opt:'',
    departement:null,
  };




  constructor(private etudiant:EtudiantService) { }

  ngOnInit(): void {
  }



  addEtudiant(){

    //console.log(this.etudiantData);

    if(this.etudiantData.nom.trim() == '' || this.etudiantData.prenom.trim() == ''){
      //Swal.fire('Succé', 'Examen ajouté avec succé', 'success');
    }




    this.etudiant.addEtudiant(this.etudiantData).subscribe(
      (data:any)=>{
        Swal.fire('Succès', 'Etudiant ajouté avec succé', 'success');
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );




  }



}
