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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
function ConsolidatedGrid(grid, margin) {
    var consolidatedGrid = __assign(__assign({}, margin), grid);
    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
var grid = { Height: 20, Width: 10, Padding: 5 };
var margin = { Left: 5, Top: 5, Width: 5, Height: 5 };
var consolidatedGrid = ConsolidatedGrid(grid, margin);
console.log("Left : ".concat(consolidatedGrid.Left, ", Top : ").concat(consolidatedGrid.Top, ", Width : ").concat(consolidatedGrid.Width, ",  Height : ").concat(consolidatedGrid.Height, ", Padding ").concat(consolidatedGrid.Padding));
console.log("Grid : Height ".concat(grid.Height, ", Width ").concat(grid.Width, ", Padding ").concat(grid.Padding));
console.log("Margin : Height ".concat(margin.Height, ", Width ").concat(margin.Width, ", Padding ").concat(margin.Padding, ", Left ").concat(margin.Left, ", Top ").concat(margin.Top));
var guitar = { manufacturer: 'Ibanez', type: 'Jem 777', strings: 6 };
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
var manufacturer = guitar.manufacturer, details = __rest(guitar, ["manufacturer"]);
console.log("The guitar ".concat(manufacturer, " ").concat(details.type, " has ").concat(details.strings, " strings"));
