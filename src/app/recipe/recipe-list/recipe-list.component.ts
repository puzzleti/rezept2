import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: []
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [
    new Recipe('Brezel', 'Brezelrezept', 'assets/images/brezel.png', [new Ingredient('Teig',2), new Ingredient('Salz',50)]),
    new Recipe('Kaese', 'Kraeuterkaese', 'assets/images/kaese.png', [new Ingredient('Frischkaese',2), new Ingredient('Kraeuter',8)]),
    new Recipe('Butter', 'frische Butter', 'assets/images/butter.png', [new Ingredient('Sahne',2), new Ingredient('Salz',10)])
  ];
  //selectedRecipe: Recipe;


  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
