import { Component, OnInit,Input } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'trb-recipe-detail',
  templateUrl: './recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {
@Input() selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
