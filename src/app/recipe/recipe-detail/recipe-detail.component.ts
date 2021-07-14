import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

  isGood = false;

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
