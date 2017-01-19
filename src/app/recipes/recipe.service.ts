import { Injectable } from '@angular/core';
import {Recipe} from './recipe';
import {Ingredient} from './ingredient';
@Injectable()
export class RecipeService {
    private recipes:Recipe[]=[
    new Recipe('dummy','dummy','../../../assets/images/person.jpg',[
      new Ingredient('french fries',2),
      new Ingredient('salad',1),
      new Ingredient('meat',3) 
    
    ]),
    new Recipe('ahmed','ahmed123','../../../assets/images/screenshot.png',[])
        
    ];
  constructor() { }
  getRecipes(){
      return this.recipes;
  }

}
