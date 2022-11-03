import {Circuit} from "./circuit";
import {Voiture} from "./voiture";

//Nouvelles voitures
var mercedes = new Voiture("mercedes", 350);
var red_bull = new Voiture("red-bull", 300);
//Tableau de voitures
var voitures = [mercedes, red_bull];

// Création du circuit du Castelet
const circuit_du_castelet = new Circuit(4500, voitures);

//Lancer la course
circuit_du_castelet.depart();
