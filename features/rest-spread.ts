import { Grid, Margin} from "./intersection-types"

function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{...margin, ...grid};

    consolidatedGrid.Width += grid.Width;
    consolidatedGrid.Height += grid.Height;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;

    return consolidatedGrid;
}

let grid :Grid = <Grid>{Height:20, Width:10, Padding: 5};
let margin: Margin = <Margin>{Left:5,Top:5,Width:5,Height:5};
let consolidatedGrid = ConsolidatedGrid(grid, margin);

console.log(`Left : ${consolidatedGrid.Left}, Top : ${consolidatedGrid.Top}, Width : ${consolidatedGrid.Width},  Height : ${consolidatedGrid.Height}, Padding ${consolidatedGrid.Padding}`);
console.log(`Grid : Height ${grid.Height}, Width ${grid.Width}, Padding ${grid.Padding}`)
console.log(`Margin : Height ${margin.Height}, Width ${margin.Width}, Padding ${margin.Padding}, Left ${margin.Left}, Top ${margin.Top}`);

let guitar = { manufacturer: 'Ibanez', type : 'Jem 777', strings : 6 };
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
let { manufacturer, ...details } = guitar;
console.log(`The guitar ${manufacturer} ${details.type} has ${details.strings} strings`);