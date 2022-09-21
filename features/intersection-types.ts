type StringOrNumber = string | number;

class Grid{
    Width: number = 0;
    Height: number = 0;
    Padding: number; 
    constructor(padding:number) {
        this.Padding = padding;
    }
}

class Margin{
    Left: number = 0;
    Top: number = 0;
    Width: number = 20;
    Height: number = 10;
    Padding?: number;
}

function ConsolidatedGrid(grid : Grid, margin : Margin) : Grid & Margin {
    let consolidatedGrid = <Grid & Margin>{};
    consolidatedGrid.Width = grid.Width + margin.Width;
    consolidatedGrid.Height = grid.Height + margin.Height;
    consolidatedGrid.Left = margin.Left;
    consolidatedGrid.Top = margin.Top;
    consolidatedGrid.Padding = margin.Padding ? margin.Padding : grid.Padding;
    return consolidatedGrid;
    }
   