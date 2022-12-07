import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  universiteData={
    nomUniversite:'',
    localisation:'',
    region:''
  };

  constructor(private universite : UniversiteService,private router : Router) { }

  ngOnInit(): void {
  }
  addUniversite(){


    this.universite.addUniversite(this.universiteData).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'Universite ajouté avec succé', 'success');
        this.router.navigate(['/dashboard/list-universite']);
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
    
      }
      );




  }
}
