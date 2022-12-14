import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/Models/Department';
import { Universite } from 'src/app/Models/universite';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.css']
})
export class ListUniversiteComponent implements OnInit {
  universites : any=[];
  universiteData={
    id:'',
    nomUniversite:'',
    localisation:'',
    region:''
  };

  uniData={
    id:'',
    nomUniversite:'',
  };

  searchText:string='';
  uni:Universite=new Universite();

  totalLength:any;
  page:number = 1;
  constructor(private universite:UniversiteService) { }

  ngOnInit(): void {
    this.getListUniversites();
   
  }
  getListUniversites(){
    this.universite.getUniversites().subscribe(
      (data:any)=>{
        this.universites = data;
        console.log(this.universites);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Erreur !!', 'Erreur dans la récupération des données', 'error');
      }
    )
  }

   details(universites:any){
    this.universiteData = universites;
  }

  deleteUniversite(id:any){
    
    Swal.fire({
      icon : 'info',
      title : 'Vous-ètes sùr ?',
      confirmButtonText : 'Supprimer',
      showCancelButton : true,
     }).then((result)=>{
      if(result.isConfirmed){
        this.universite.deleteUniversite(id).subscribe(
          (data)=>{
           
            Swal.fire('Succé', 'Universite supprimée avec succé', 'success'); 
            window.location.reload();
          },
          
          (error)=>{
            Swal.fire('Erreur', 'Erreur de suppression', 'error');
    
          }
        );
        
      }
     });

    }
    
  key: string = 'nomDepartment';
  reverse: boolean = false ;
  sort(key:any){
    this.key=key;
    this.reverse = !this.reverse;
  }

  selectUniversite(u:any){
    this.uni=u;

  }

  onSearchTextChanged(searchValue:string){

    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
