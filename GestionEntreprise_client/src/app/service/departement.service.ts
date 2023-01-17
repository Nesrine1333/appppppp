import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from '../models/departement';
import { Mission } from '../models/mission';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

 host="http://localhost:8080/restapiEntreprise"
   constructor(private client:HttpClient) { }
    public getallDepartement():Observable<Departement[] >
    {
      return this.client.get<Departement[]>(this.host+"/getallDepartement");
    }

}
