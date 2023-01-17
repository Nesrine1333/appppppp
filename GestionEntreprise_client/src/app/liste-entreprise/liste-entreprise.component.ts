import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../service/entreprise.service';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.css']
})
export class ListeEntrepriseComponent implements OnInit{
Entreprise !:Entreprise[]
  constructor(private service:EntrepriseService){}
ngOnInit():void{
  this.service.getallEntreprise().subscribe(data=>this.Entreprise=data)
}
}
