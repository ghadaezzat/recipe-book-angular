import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../recipes/ingredient';
@Component({
  selector: 'trb-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
items:Ingredient[];
  constructor() { }

  ngOnInit() {
  }

}
