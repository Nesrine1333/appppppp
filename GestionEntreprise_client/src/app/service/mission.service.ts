import { Injectable } from '@angular/core';
import { Mission } from '../models/mission';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class MissionService {
host="http://localhost:8080/restapiEntreprise"
   constructor(private client:HttpClient) { }
    public getallMission():Observable<Mission[] >
    {
      return this.client.get<Mission[]>(this.host+"/getallMissions");
    }

}
