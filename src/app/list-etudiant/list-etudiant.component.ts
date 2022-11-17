import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../Services/etudiant.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {


  etudiants : any=[];


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


}
