import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'trb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]=[
    new Recipe('dummy','dummy','../../../assets/images/person.jpg',[]),
    new Recipe('ahmed','ahmed123','../../../assets/images/screenshot.png',[])
        
    ];
    @Output() recipeSelected= new EventEmitter<Recipe>();

    constructor() { }

  ngOnInit() {
  }
 onSelected(recipe :Recipe){
     this.recipeSelected.emit(recipe)
 }
}
