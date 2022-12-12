import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class detailEquipeService {

  constructor(private http : HttpClient) { }

  public getDetailEquipe(){

    return this.http.get(`${baseUrl}/detailequipe`);
    

  }


  public addDetailEquipe(detailequipe:any){

    return this.http.post(`${baseUrl}/detailequipe/add/`,detailequipe);

  }

  updateDetailEquipe(detailequipe:any){
  
    return this.http.put(`${baseUrl}/detailequipe/update`, detailequipe);

  }

  deleteDetailEquipe(id:any){

    return this.http.delete(`${baseUrl}/detailequipe/delete/${id}`);
  }



  getDetailEquipeById(id:any){

    return this.http.get(`${baseUrl}/detailequipe/${id}`);

  }

  getSingleDetailEquipe(id:any){


    return this.http.get(`${baseUrl}/detailequipe/${id}`);

  }
}
