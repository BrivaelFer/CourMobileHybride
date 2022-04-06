import{Affichable} from './Affichable';

export class Auteur implements Affichable{
    nom:string;
    prenom:string;

    constructor(nom:string, prenom:string)
    {
        this.nom = nom;
        this.prenom =prenom;
    }
    
    afficher(): string {
        let r : string;
        r = this.nom + ' ' + this.prenom;
        return r;
    }
}