import { Component, OnInit } from '@angular/core';
import { Departement } from '../models/departement';
import { DepartementService } from '../service/departement.service';

@Component({
  selector: 'app-liste-departement',
  templateUrl: './liste-departement.component.html',
  styleUrls: ['./liste-departement.component.css']
})
export class ListeDepartementComponent implements OnInit{
Departement !:Departement[]
  constructor(private service:DepartementService){}
ngOnInit():void{
  this.service.getallDepartement().subscribe(data=>this.Departement=data)
}
}
