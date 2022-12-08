import { Etudiant } from "./Etudiant";

export class Contrat{

    id?:number;
    dateDebutContrat?:Date;
    dateFinContrat?:Date;
    specialite?:string;
    montantContrat?: number;
    archive?:boolean;
    etudiant?:Etudiant;
}