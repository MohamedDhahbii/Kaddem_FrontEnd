import { Component, OnInit, Input } from '@angular/core';
import { Equipe } from 'src/app/Models/Equipe';

@Component({
  selector: 'app-selected-equipe',
  templateUrl: './selected-equipe.component.html',
  styleUrls: ['./selected-equipe.component.css']
})
export class SelectedEquipeComponent implements OnInit {

  @Input("equipe")equipe :any;
  constructor() { }

  ngOnInit(): void {
  }

}
