import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/Models/Equipe';
import { EquipeService } from 'src/app/Services/equipe-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipes : Equipe[]=[];
  eq : Equipe = new Equipe();
  selected_equipe : Equipe = new Equipe();

  totalLength:any;
  page:number = 1;

  searchText:string='';

  constructor(private equipeService : EquipeService) { }

  ngOnInit(): void {
    this.getListEquipe();
  }

  getListEquipe (){
    this.equipeService.getEquipes().subscribe(
      (data:any)=>{
        this.equipes = data;

        this.totalLength = data.length;
        console.log(this.equipes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des données', 'error');
      }
    )
  }

  deleteEquipe(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.equipeService.deleteEquipe(id).subscribe(
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

    details(equi:Equipe){
      this.eq = equi;
    }

    onSearchTextChanged(searchValue:string){
      this.selected_equipe = new Equipe();
      this.searchText = searchValue;
      console.log(this.equipes);
    }
    select_equipe(equipe : Equipe){
      this.selected_equipe = equipe;
    }
}
