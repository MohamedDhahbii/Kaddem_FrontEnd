import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipeService } from 'src/app/Services/equipe-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {

  id = 0;
  equipeData: any;
  constructor(private route:ActivatedRoute,private equipeService : EquipeService, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.equipeService.getSingleEquipe(this.id).subscribe(
      (data)=>{
        this.equipeData = data;
        console.log(this.equipeData);
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  updateData(){
   // alert('clicked');
   this.equipeService.updateEquipe(this.equipeData).subscribe(
    ()=>{
      Swal.fire('Success !!', 'Equipe modifiée avec succé', 'success').then((e)=>{
        this.router.navigate(['/dashboard/list-equipe']);
      }).catch(
        ()=>{
          Swal.fire('error !!', 'Error occured', 'error');
        });
    }
   )
  }

}
