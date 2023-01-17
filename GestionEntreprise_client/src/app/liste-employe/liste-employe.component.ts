import { Component, OnInit } from '@angular/core';
import { Employe } from '../models/employe';
import { EmployeService } from '../service/employe.service';
@Component({
  selector: 'app-liste-employe',
  templateUrl: './liste-employe.component.html',
  styleUrls: ['./liste-employe.component.css']
})
export class ListeEmployeComponent  implements OnInit{
Employe !:Employe[]
  constructor(private service:EmployeService){}
ngOnInit():void{
  this.service.getallEmploye().subscribe(data=>this.Employe=data)
}
}
