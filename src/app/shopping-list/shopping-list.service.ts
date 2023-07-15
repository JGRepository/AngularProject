import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
    ingridientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] =[
        new Ingredient('apples', 1),
        new Ingredient('juice', 1),

    ];

    getIngridients(){
        return this.ingredients.slice();
    }   

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingridientsChanged.emit(this.ingredients.slice());
    }
     
}