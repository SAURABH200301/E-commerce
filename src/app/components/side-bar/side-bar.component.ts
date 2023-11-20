import { Component, EventEmitter, Output } from '@angular/core';
import { optiontype } from './optionType';
import { APISService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent {
  @Output() optionChange = new EventEmitter<string>();
  option: string = "";

  options: optiontype[] = [
    { id: 1, name: 'smartphones', isChecked: false },
    { id: 2, name: 'home-decoration', isChecked: false },
    { id: 3, name: 'groceries', isChecked: false },
    { id: 4, name: 'skincare', isChecked: false },
    { id: 5, name: 'fragrances', isChecked: false },
    { id: 6, name: 'laptops', isChecked: false }
  ]
  selectedCategory: any;
  constructor(service: APISService) {
    service.categoryOption = this.option
  }
  fetchCategoryData(option: any) {
    this.option = option.name;
    this.optionChange.emit(option);

  }
}