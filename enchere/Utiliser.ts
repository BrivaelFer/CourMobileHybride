import{Vendable} from './Vendable';
import{Acheteur} from './Acheteur';
import{Auteur} from './Auteur';
import{Affichable} from './Affichable';
import { Oeuvres } from './Oeuvres';

export module Vente
{
    class enchère
    {
        acheteurs:Acheteur[];
        oeuvres:Oeuvres.Oeuvre[];
        constructor(acheteurs:Acheteur[], oeuvres: Oeuvres.Oeuvre[])
        {
            this.oeuvres = oeuvres
            this.acheteurs = acheteurs
        }

        public deroulement()
        {
            
        }
    }

}

let book = new Oeuvres.Livre(2000, 'Le Boucian', [new Auteur('michel', 'truc')]);
let statu = new Oeuvres.Sculpture(2000, 'caillou',[new Auteur('Jean', 'machin')], 'pierre molle');
console.log(statu);

console.log(book.afficher() + statu.afficher());

book.encherir(2000 , new Acheteur('Duc', 'Trou'));
statu.encherir(500 , new Acheteur('Rapia', 'jean'));

console.log(book.afficher() + statu.afficher());