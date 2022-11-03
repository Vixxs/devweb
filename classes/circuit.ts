import Voiture from "./voiture"

class Circuit {
        private kilometres: number;
        private voitures: Array<Voiture>;

        constructor() {
                this.kilometres = 1000;
        }

        depart(): void {
                this.voitures.forEach(voiture => {
                        voiture.demarer();
                });
                this.voitures.forEach(voiture => {
                        if (voiture.kilometre == this.kilometres) {
                                voiture.fin();
                        }
                });
        }

        fin(voiture): string {
                return 'La voiture ' + ${voiture.marque} + ' a gagné';
        }
}