import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search4',
  templateUrl: './search4.component.html',
  styleUrls: ['./search4.component.css']
})
export class Search4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  entredSearchValue:string='';

  @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.entredSearchValue)
  }
}
