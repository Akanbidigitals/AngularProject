import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  searchText: string = '';
  //search : string = "";

  updateSearchText(event:any) {
    this.searchText = event.target.value;
  }
}