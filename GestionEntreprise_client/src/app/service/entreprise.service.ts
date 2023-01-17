import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entreprise } from '../models/entreprise';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  host="http://localhost:8080/restapiEntreprise/"
   constructor(private client:HttpClient) { }
    public getallEntreprise():Observable<Entreprise[] >
    {
      return this.client.get<Entreprise[]>(this.host+"allEntreprises");
    }

}
