import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test', 'desc', 'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000'),
    new Recipe('Test', 'desc', 'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000')
  ]
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
