import { Component,ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./cell.component.css']
})
export class CellComponent {
  @Input() columns:any
}
