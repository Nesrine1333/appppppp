import { Contrat } from "./contrat";
import { Departement } from "./departement";

export interface Employe {


id:number;
prenom:string;
nom:string;
 email:string;
 departement:Departement;
 contrat:Contrat;
}
