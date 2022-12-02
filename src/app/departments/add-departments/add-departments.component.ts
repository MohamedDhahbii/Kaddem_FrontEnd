import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from 'src/app/Services/departments.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

  departmentData={
    nomDepartment:'',
    universite:null,
  };

  constructor(private department:DepartmentsService) { }

  ngOnInit(): void {
  }

  addDepartment(){


    this.department.addDepartment(this.departmentData).subscribe(
      (data:any)=>{
        Swal.fire('Succé', 'Department ajouté avec succé', 'success');
      },
      (error)=>{
        Swal.fire('Erreur !', 'Erreur de cette opération', 'error');
        console.log(error);
      }
      );




  }

}
