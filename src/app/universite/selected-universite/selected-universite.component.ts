import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-universite',
  templateUrl: './selected-universite.component.html',
  styleUrls: ['./selected-universite.component.css']
})
export class SelectedUniversiteComponent implements OnInit {
  @Input("universite")universite:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
