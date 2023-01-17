import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { ListeEntrepriseComponent } from './liste-entreprise/liste-entreprise.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';

const routes: Routes = [{path:"mission",component:ListeMissionComponent},{path:"Employe",component:ListeEmployeComponent},{path:"entreprise",component:ListeEntrepriseComponent},{path:"departement",component:ListeDepartementComponent},{path:"contrat",component:ListeContratComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
