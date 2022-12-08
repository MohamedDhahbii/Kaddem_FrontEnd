import { Department } from "./Department";
import { Equipe } from "./Equipe";

export class Etudiant{

    id?:number;
    nom?:String;
    prenom?:String;
    opt?:String;
    departement?:Department;
    equipe?:Equipe[];
}