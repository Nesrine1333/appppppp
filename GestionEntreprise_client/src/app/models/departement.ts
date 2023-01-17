import { Entreprise } from "./entreprise";
import { Mission } from "./mission";

export interface Departement {
    	
    id:number;
    name:string;
    mission:Mission;
    entreprise:Entreprise;
}
