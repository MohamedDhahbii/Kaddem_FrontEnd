import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/Services/equipe-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {
  equipeData={
    nomEquipe:'',
    niveau:'',
  };




  constructor(private equipe:EquipeService) { }

  ngOnInit(): void {
  }

  addEquipe(){

    //console.log(this.etudiantData);

    if(this.equipeData.nomEquipe.trim() == '' || this.equipeData.niveau.trim() == ''){
      //Swal.fire('Succé', 'Examen ajouté avec succé', 'success');
    }




    this.equipe.addEquipe(this.equipeData).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'Etudiant ajouté avec succé', 'success');
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );




  }

}
