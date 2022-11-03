"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicule = void 0;
var Vehicule = /** @class */ (function () {
    function Vehicule(marque, kmh) {
        this.km_parcourru = 0;
        this.marque = marque;
        this.kmh = kmh;
    }
    Vehicule.prototype.demarrer = function () {
        var _this = this;
        setInterval(function () {
            _this.km_parcourru += _this.kmh;
        }, Vehicule.secondeTraitement);
    };
    Vehicule.prototype.toString = function () {
        return '';
    };
    Vehicule.secondeTraitement = 1;
    return Vehicule;
}());
exports.Vehicule = Vehicule;
