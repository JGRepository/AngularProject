import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent {
@Input()  recipe!: Recipe;

constructor(private recipeService: RecipeService){}

onAddToShoppingList(){
this.recipeService.addToIngredientsToShoppingList(this.recipe.ingredients);
} 
}
