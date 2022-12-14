import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {



  @Input("nbEtudiant")nbEtudiant:any;
  constructor() { }

  ngOnInit(): void {
  }

}
