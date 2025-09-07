import { Component, Input, EventEmitter,Output } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  @Input()
  all: number = 0;

  @Input()
  inStock: number = 0;

  @Input()
  outOfStock: number = 0;

  @Output()
  selectFilterRadioButtonChanged  = new EventEmitter<string>();

  
  selectedFilterRadioButton: string = 'all';


  SelectFilterRadioButtonChanged(){
    this.selectFilterRadioButtonChanged.emit(this.selectedFilterRadioButton)
  }
}
