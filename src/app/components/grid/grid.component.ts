import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  numberRows: number = 3;
  numberCol: number = 3;
  grid:any[]=[]
  constructor(){
    this.createGrid()
  }
  createGrid(){
    this.grid = Array.from({ length: this.numberRows }, () => Array(this.numberCol).fill(0));

  }
}
