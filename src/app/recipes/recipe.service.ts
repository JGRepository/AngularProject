import { EventEmitter } from "@angular/core";
import { Recipe } from "../shared/recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Test', 'desc', 'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000'),
        new Recipe('Another', 'desc', 'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000')
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    recipeSelected = new EventEmitter<Recipe>();
}