import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../models/employe';

import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  host="http://localhost:8080/restapiEntreprise"
   constructor(private client:HttpClient) { }
    public getallEmploye():Observable<Employe[] >
    {
      return this.client.get<Employe[]>(this.host+"/getallEmploye");
    }

}
