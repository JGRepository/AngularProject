import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input()
  recipe!: Recipe;

  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }

  constructor() { }
  ngOnInit() {

  }
}
