import { Component, OnInit } from '@angular/core';
import { Contrat } from '../models/contrat';
import { ContratService } from '../service/contrat.service';

@Component({
  selector: 'app-liste-contrat',
  templateUrl: './liste-contrat.component.html',
  styleUrls: ['./liste-contrat.component.css']
})
export class ListeContratComponent implements OnInit {
Contrat !:Contrat[]
  constructor(private service:ContratService){}
ngOnInit():void{
  this.service.getallContrat().subscribe(data=>this.Contrat=data)
}
}
