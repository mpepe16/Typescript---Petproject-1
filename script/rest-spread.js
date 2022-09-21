"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function ConsolidatedGrid(grid, margin) {
    var consolidatedGrid = __assign(__assign({}, margin), grid);
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
function PrintInstruments(log) {
    var instruments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        instruments[_i - 1] = arguments[_i];
    }
    console.log(log);
    instruments.forEach(function (instrument) {
        console.log(instrument);
    });
}
PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet', 'Clavinova');
var grid = { Height: 20, Width: 10, Padding: 5 };
var margin = { Left: 5, Top: 5, Width: 5, Height: 5 };
var consolidatedGrid = ConsolidatedGrid(grid, margin);
console.log("Left : ".concat(consolidatedGrid.Left, ", Top : ").concat(consolidatedGrid.Top, ", Width : ").concat(consolidatedGrid.Width, ",  Height : ").concat(consolidatedGrid.Height, ", Padding ").concat(consolidatedGrid.Padding));
console.log("Grid : Height ".concat(grid.Height, ", Width ").concat(grid.Width, ", Padding ").concat(grid.Padding));
console.log("Margin : Height ".concat(margin.Height, ", Width ").concat(margin.Width, ", Padding ").concat(margin.Padding, ", Left ").concat(margin.Left, ", Top ").concat(margin.Top));
var guitar = { manufacturer: 'Ibanez', type: 'Jem 777', strings: 6 };
var instruments = ['guitar', 'drum', 'violin', 'flute'];
/*
// Original way of deconstructing an object
const manufacturer = guitar.manufacturer;
const type = guitar.type;
const strings = guitar.strings;
*/
/*
// Deconstructing all elements in the literal
const {manufacturer : manufacturer1, type, strings} = guitar;
*/
var manufacturer = guitar.manufacturer, type = guitar.type, strings = guitar.strings;
var gui = instruments[0], dr = instruments[1], vio = instruments[2], flu = instruments[3];
console.log("The following instruments are : ".concat(gui, " , ").concat(dr, " , ").concat(vio, ", ").concat(flu, " ! "));
console.log("The guitar ".concat(manufacturer, " ").concat(type, " has ").concat(strings, " strings"));
//# sourceMappingURL=rest-spread.js.map