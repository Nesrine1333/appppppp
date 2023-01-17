import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission';
import { MissionService } from '../service/mission.service';
@Component({
  selector: 'app-liste-mission',
  templateUrl: './liste-mission.component.html',
  styleUrls: ['./liste-mission.component.css']
})
export class ListeMissionComponent implements OnInit{
Mission !:Mission[]
  constructor(private service:MissionService){}
ngOnInit():void{
  this.service.getallMission().subscribe(data=>this.Mission=data)
}
}
