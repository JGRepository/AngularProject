import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent{

  selectedRecipe!: Recipe;
  constructor(private recipeSelected: RecipeService){}
  
  ngOnInit(){
    this.recipeSelected.recipeSelected.subscribe((recipe: Recipe) => {this.selectedRecipe = recipe});
  }
}
