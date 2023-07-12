import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent {
@ViewChild ('nameInput') nameInputRef!: ElementRef;
@ViewChild ('amountInput') amountInputRef!: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
@Output() formIngredient = new EventEmitter<Ingredient>();

onSubmit(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient (ingName, ingAmount);
  this.formIngredient.emit(newIngredient);
}
onAddItem(){
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient (ingName, ingAmount);
  this.ingredientAdded.emit(newIngredient);
}
}
