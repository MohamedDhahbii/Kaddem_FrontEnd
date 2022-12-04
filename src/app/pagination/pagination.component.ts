import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  etudiantList:any[] = [];

  etudiantsPerPage : number = 4;

  public selectedPage = 1;

  etudiants: any[]=[]


  constructor() { }

  ngOnInit(): void {
    let pageIndex = (this.selectedPage - 1) * this.etudiantsPerPage;
    this.etudiants = this.etudiantList.slice(pageIndex,this.etudiantsPerPage);
  }


  get pageNumbers():number[]{
    
    return Array(Math.ceil(this.etudiantList.length / this.etudiantsPerPage)).fill(0).map((x,i)=>i+1);

  }

}
