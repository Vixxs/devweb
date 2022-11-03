import {VehiculeInterface} from '../interfaces/vehiculeInterface';
abstract class Vehicule implements VehiculeInterface {
    public static readonly secondeTraitement = 1;

    private marque: string;
    private kmh: number;
    private km_parcourru = 0;

    constructor(marque: string, kmh: number){
        this.marque = marque;
        this.kmh = kmh;
    }

    demarrer(): void{
        setInterval(() =>{
            this.km_parcourru += this.kmh;
        }, Vehicule.secondeTraitement)
    }

    toString(): string{
        return this.marque;
    }
}