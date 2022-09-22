import { Grid, Margin} from "./intersection-types"

function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{...margin, ...grid};

    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;

    return consolidatedGrid;
}

function PrintInstruments(log : string, ...instruments : string[]) : void {
    console.log(log);
    instruments.forEach(instrument => {
    console.log(instrument);
    });
   }
   PrintInstruments('Music Shop Inventory', 'Guitar', 'Drums', 'Clarinet',
   'Clavinova');

let grid :Grid = <Grid>{Height:20, Width:10, Padding: 5};
let margin: Margin = <Margin>{Left:5,Top:5,Width:5,Height:5};
let consolidatedGrid = ConsolidatedGrid(grid, margin);

console.log(`Left : ${consolidatedGrid.Left}, Top : ${consolidatedGrid.Top}, Width : ${consolidatedGrid.Width},  Height : ${consolidatedGrid.Height}, Padding ${consolidatedGrid.Padding}`);
console.log(`Grid : Height ${grid.Height}, Width ${grid.Width}, Padding ${grid.Padding}`)
console.log(`Margin : Height ${margin.Height}, Width ${margin.Width}, Padding ${margin.Padding}, Left ${margin.Left}, Top ${margin.Top}`);

let guitar = { manufacturer: 'Ibanez', type : 'Jem 777', strings : 6 };
let instruments = ['guitar', 'drum', 'violin', 'flute'];
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
let {manufacturer, type, strings} = guitar;
let [gui, dr, vio, flu] = instruments;

console.log(`The following instruments are : ${gui} , ${dr} , ${vio}, ${flu} ! `);
console.log(`The guitar ${manufacturer} ${type} has ${strings} strings`);