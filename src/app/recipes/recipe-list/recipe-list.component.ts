import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'trb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]=[];
    @Output() recipeSelected= new EventEmitter<Recipe>();
    recipe=new Recipe('dummy','dummy','../../../assets/images/person.jpg');

    constructor() { }

  ngOnInit() {
  }
 onSelected(recipe :Recipe){
     this.recipeSelected.emit(recipe)
 }
}
