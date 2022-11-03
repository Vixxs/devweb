import { Vehicule } from "./vehicule";

export class Voiture extends Vehicule {
    toString () : string {
        return `La voiture de la marque ` + this.marque + ` a parcourru `+ this.km_parcourru+ ` km`
    }
}

