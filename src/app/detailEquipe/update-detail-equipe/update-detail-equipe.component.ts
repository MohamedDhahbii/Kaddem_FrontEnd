import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailEquipe } from 'src/app/Models/DetailEquipe';
import { detailEquipeService } from 'src/app/Services/detailEquipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-detail-equipe',
  templateUrl: './update-detail-equipe.component.html',
  styleUrls: ['./update-detail-equipe.component.css']
})
export class UpdateDetailEquipeComponent implements OnInit {
  id = 0;

  detailequipes : any;
  eq : DetailEquipe = new DetailEquipe();

  totalLength:any;
  page:number = 1;

  DetailEquipeData={
    id:'',
    salle:'',
    thematique:'',
  };

  constructor(private detailequipeService : detailEquipeService, private router : Router, private route:ActivatedRoute) { }

  ngOnInit():void {

    this.id = this.route.snapshot.params['id'];

    this.detailequipeService.getSingleDetailEquipe(this.id).subscribe(
      (data)=>{
        this.detailequipes = data;
        console.log(this.detailequipes);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  updateData(){
    // alert('clicked');
    this.detailequipeService.updateDetailEquipe(this.detailequipes).subscribe(
     ()=>{
       Swal.fire('Success !!', 'Detail Equipe modifiée avec succé', 'success').then((e)=>{
         this.router.navigate(['/dashboard/list-detail-equipe']);
       }).catch(
         ()=>{
           Swal.fire('error !!', 'Error occured', 'error');
         });
     }
    )
   }

}
