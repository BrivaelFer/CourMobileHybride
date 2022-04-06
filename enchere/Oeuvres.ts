import{Vendable} from './Vendable';
import{Acheteur} from './Acheteur';
import{Auteur} from './Auteur';
import{Affichable} from './Affichable';

export module Oeuvres{
    export class Oeuvre implements Vendable, Affichable
    {
        annee : number;
        titre : string;
        meilleurEnchere:number;
        auteur:Auteur[];
        acheteur ?:Acheteur;
        constructor(annee : number, titre : string, auteur:Auteur[])
        {
            this.annee = annee;
            this.titre = titre;
            this.auteur = auteur;
            this.meilleurEnchere = 0;
        }
        encherir(nouvelleEnchere : number, acheteur : Acheteur):void
        {
            this.meilleurEnchere = nouvelleEnchere;
            this.acheteur = acheteur;

            console.log('\n\n' + acheteur.nom +' '+ acheteur.prenom + ' enchèri de ' + nouvelleEnchere + '\n\n');
        }
        afficher(): string 
        {
            let r:string;
            r = this.titre + ' ' + this.annee + ' \n';
            if(this.auteur != undefined)
            {
                let autList: string;
                this.auteur.forEach(
                    function(auteurSelect)
                    {
                        if(autList == undefined)
                        {
                            autList = auteurSelect.afficher();
                        }
                        else
                        {
                            autList += ', ' + auteurSelect.afficher();
                        }
                    }
                );
                r += ' ' + autList + '\n';
            }
            r += ' enchère: ' + this.meilleurEnchere+ '\n';
            if(this.acheteur != undefined)
            {
                r += ' ' + this.acheteur.nom + ' ' + this.acheteur.prenom +'\n';
            }
            return r;
        }
    }
    export class Livre extends Oeuvre
    {
        constructor(annee : number, titre : string, auteur:Auteur[])
        {
            super(annee, titre, auteur);
        }
    }
    export class Peinture extends Oeuvre
    {
        constructor(annee : number, titre : string, auteur:Auteur[])
        {
            super(annee, titre, auteur);
        }
    }
    export class Sculpture extends Oeuvre
    {
        matiere : string;
        constructor(annee : number, titre : string, auteur:Auteur[], matiere : string)
        {
            super(annee, titre, auteur);
            this.matiere = matiere;
        }
        afficher(): string {
            let r = super.afficher();
            return r + ' matière : ' + this.matiere;
        }
    }
}