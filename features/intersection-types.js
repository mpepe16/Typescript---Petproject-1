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
exports.__esModule = true;
exports.Margin = exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(padding) {
        this.Width = 0;
        this.Height = 0;
        this.Padding = padding;
    }
    return Grid;
}());
exports.Grid = Grid;
var Margin = /** @class */ (function () {
    function Margin() {
        this.Left = 0;
        this.Top = 0;
        this.Width = 10;
        this.Height = 20;
    }
    return Margin;
}());
exports.Margin = Margin;
function ConsolidatedGrid(grid, margin) {
    var consolidatedGrid = __assign({}, margin);
    consolidatedGrid.Left = margin.Left;
    consolidatedGrid.Top = margin.Top;
    consolidatedGrid.Width = margin.Width + grid.Width;
    consolidatedGrid.Height = margin.Height + grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
}
var grid = { Height: 20, Width: 10, Padding: 5 };
var x = ConsolidatedGrid(grid, { Left: 5, Top: 5, Width: 5, Height: 5 });
console.log("Left : ".concat(x.Left, ", Top : ").concat(x.Top, ", Width : ").concat(x.Width, ", Height : ").concat(x.Height, ", Padding : ").concat(x.Padding));
