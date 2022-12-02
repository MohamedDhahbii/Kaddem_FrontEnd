import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/Services/etudiant.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

  id=0;
  etud:any;
  

  constructor(private route:ActivatedRoute,private etudiant : EtudiantService, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.etudiant.getSingleEtudiant(this.id).subscribe(
      (data)=>{
        this.etud = data;
        console.log(this.etud);
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  updateData(){
   // alert('clicked');
   this.etudiant.updateEtudiant(this.etud).subscribe(
    (data)=>{
      Swal.fire('Success !!', 'Etudiant modifié avec succé', 'success').then((e)=>{
        this.router.navigate(['/dashboard/list-etudiant']);
      });
    }
   )
  }

}
