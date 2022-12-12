import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailEquipe } from 'src/app/Models/DetailEquipe';
import { detailEquipeService } from 'src/app/Services/detailEquipe.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-detail-equipe',
  templateUrl: './add-detail-equipe.component.html',
  styleUrls: ['./add-detail-equipe.component.css']
})
export class AddDetailEquipeComponent implements OnInit {
  a:number=0;

  DetailEquipeData={
    salle:'',
    thematique:'',
  };

  constructor(private detailequipeService : detailEquipeService,private router : Router) { }

  ngOnInit(): void {
  }

  addDetailEquipe(){


    this.detailequipeService.addDetailEquipe(this.DetailEquipeData).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'DetailEquipe ajouté avec succé', 'success');
        this.router.navigate(['/dashboard/list-detail-equipe']);
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
    
      }
      );




  }
  onmouseOver(): boolean {
    if ((!this.DetailEquipeData.salle || !this.DetailEquipeData.thematique) && this.a == 0) {
      this.buttonMoveLeft();
      this.a = 1;
      return false;
    }
    if ((!this.DetailEquipeData.salle || !this.DetailEquipeData.thematique) && this.a == 1) {
      this.buttonMoveRight();
      this.a = 2;
      return false;
    }
    if ((!this.DetailEquipeData.salle || !this.DetailEquipeData.thematique) && this.a == 2) {
      this.buttonMoveLeft();
      this.a = 1;
      return false;
    }

    else {
      document.getElementById('submit-btn')!.style.cursor = 'pointer';
      this.addDetailEquipe();
      return false;

    };

  };





  buttonMoveLeft() {

    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(-1000%)';

  };


  buttonMoveRight() {

    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(0%)';

  };


  resetBtn() {
    const button = document.getElementById('submit-btn');
    button!.style.transform = 'translateX(0%)';

  };
}
