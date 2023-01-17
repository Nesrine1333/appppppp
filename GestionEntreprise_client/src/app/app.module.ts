import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeMissionComponent } from './liste-mission/liste-mission.component';
import { ListeContratComponent } from './liste-contrat/liste-contrat.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { ListeEntrepriseComponent } from './liste-entreprise/liste-entreprise.component';
import { ListeDepartementComponent } from './liste-departement/liste-departement.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeMissionComponent,
    ListeContratComponent,
    ListeEmployeComponent,
    ListeEntrepriseComponent,
    ListeDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
