import {Voiture} from './voiture'

export class Circuit {
        private kilometres: number;
        private voitures: Array<Voiture>;

        constructor(kilometres: number, voitures: Array<Voiture>) {
                this.kilometres = kilometres;
                this.voitures = voitures;
        }

        depart(): void {
                this.voitures.forEach(voiture => {
                        voiture.demarrer();
                        if (voiture.km_parcourru == this.kilometres) {
                                this.fin(voiture);
                        }
                });
        }

        fin(voiture : Voiture): string {
                return 'La voiture ' + voiture.marque + ' a gagné';
        }
}