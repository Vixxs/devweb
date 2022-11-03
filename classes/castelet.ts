
//Nouvelles voitures
const mercedes = new voiture("mercedes", 350);
const red_bull = new voiture("red-bull", 300);
//Tableau de voitures
var voitures: voiture[mercedes, red_bull];

// Création du circuit du Castelet
const circuit_du_castelet = new circuit(4500, voitures);

//Lancer la course
circuit_du_castelet.depart();
