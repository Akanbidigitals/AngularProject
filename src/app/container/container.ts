import { Component } from '@angular/core';
import { Search } from "./search/search";
import { CommonModule } from '@angular/common';
import { ProductList } from "./product-list/product-list";

@Component({
  selector: 'app-container',
  imports: [CommonModule, Search, ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css'
})
export class Container {
  listOfString : string[] = ["Mark", "Steve","Merry","John","Sarah"]
}
