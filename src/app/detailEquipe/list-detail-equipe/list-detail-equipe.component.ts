import { Component, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/Models/DetailEquipe';
import { detailEquipeService } from 'src/app/Services/detailEquipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-detail-equipe',
  templateUrl: './list-detail-equipe.component.html',
  styleUrls: ['./list-detail-equipe.component.css']
})
export class ListDetailEquipeComponent implements OnInit {

  detailequipes : any=[];

  totalLength:any;
  page:number = 1;

  DetailEquipeData={
    id:'',
    salle:'',
    thematique:'',
  };

  constructor(private detailequipeService : detailEquipeService) { }

  ngOnInit(): void {
    this.getListDetailEquipe();
  }

  details(detailequipes:any){
    this.DetailEquipeData = detailequipes;
  }

  getListDetailEquipe(){
    this.detailequipeService.getDetailEquipe().subscribe(
      (data:any)=>{
        this.detailequipes = data;
        console.log(this.detailequipes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des données', 'error');
      }
    )
  }

  deleteDetailEquipe(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.detailequipeService.deleteDetailEquipe(id).subscribe(
          (data)=>{
           
            Swal.fire('Succés', 'Etudiant supprimée avec succé', 'success'); 
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
