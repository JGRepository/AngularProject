import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../shared/recipe.model";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
constructor(private slService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('Test', 'desc',
            'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000',
            [
                new Ingredient('meat', 1),
                new Ingredient('french Fries', 10)
            ]),
        new Recipe('Another', 'desc',
            'https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=2000',
            [
                new Ingredient('Buns', 10),
                new Ingredient('Burger', 1),

            ])
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    addToIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }

    recipeSelected = new EventEmitter<Recipe>();
}