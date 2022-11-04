"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circuit = void 0;
var Circuit = /** @class */ (function () {
    function Circuit(kilometres, voitures) {
        this.kilometres = kilometres;
        this.voitures = voitures;
    }
    Circuit.prototype.depart = function () {
        var _this = this;
        this.voitures.forEach(function (voiture) {
            voiture.demarrer();
            if (voiture.km_parcourru == _this.kilometres) {
                _this.fin(voiture);
            }
        });
    };
    Circuit.prototype.fin = function (voiture) {
        return 'La voiture ' + voiture.marque + ' a gagné';
    };
    return Circuit;
}());
exports.Circuit = Circuit;
