import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contrat } from '../models/contrat';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class ContratService {

 host="http://localhost:8080/restapiEntreprise"
   constructor(private client:HttpClient) { }
    public getallContrat():Observable<Contrat[] >
    {
      return this.client.get<Contrat[]>(this.host+"/getallContrat");
    }

}
