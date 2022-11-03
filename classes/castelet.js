"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circuit_1 = require("./circuit");
var voiture_1 = require("./voiture");
//Nouvelles voitures
var mercedes = new voiture_1.Voiture("mercedes", 350);
var red_bull = new voiture_1.Voiture("red-bull", 300);
//Tableau de voitures
var voitures = [mercedes, red_bull];
// Création du circuit du Castelet
var circuit_du_castelet = new circuit_1.Circuit(4500, voitures);
//Lancer la course
circuit_du_castelet.depart();
