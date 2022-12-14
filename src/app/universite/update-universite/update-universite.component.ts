import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {
  universiteData={
    nomUniversite:'',
    localisation:'',
    region:''
  };
  id=0;
  uni:any;
  constructor(private route:ActivatedRoute,private universite : UniversiteService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.universite.getUniversite(this.id).subscribe(
      (data)=>{
        this.uni = data;
        console.log(this.uni);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  updateData(f:any){
    
   this.universite.updateUniversite(f).subscribe(
    
    (data)=>{
      Swal.fire('Success !!', 'Universite modifié avec succé', 'success').then((e)=>{
        this.router.navigate(['/dashboard/list-universite']);
      });
    }
   )
  }

}
