import{Acheteur} from './Acheteur';
export interface Vendable{
    meilleurEnchere:number;
    acheteur ?:Acheteur;

    encherir(nouvelleEnchere : number, acheteur : Acheteur): void;
}