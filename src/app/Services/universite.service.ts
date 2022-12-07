import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './Helpers';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private http:HttpClient) { }
  public getUniversites(){

    return this.http.get(`${baseUrl}/universite`);
    

  }


  public addUniversite(universite:any){

    return this.http.post(`${baseUrl}/universite/add/`,universite);

  }

  updateUniversite(universite:any){
  
    return this.http.put(`${baseUrl}/universite/update`, universite);

  }

  deleteUniversite(id:any){

    return this.http.delete(`${baseUrl}/universite/delete/${id}`);
  }



  getUniversite(id:any){

    return this.http.get(`${baseUrl}/universite/${id}`);

  }
}
