import { Component, OnInit } from '@angular/core';
import { EquipeService } from 'src/app/Services/equipe-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipes : any=[];


  constructor(private equipe : EquipeService) { }

  ngOnInit(): void {
    this.getListEquipe();
  }

  getListEquipe(){
    this.equipe.getEquipes().subscribe(
      (data:any)=>{
        this.equipes = data;
        console.log(this.equipes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des données', 'error');
      }
    )
  }
}
