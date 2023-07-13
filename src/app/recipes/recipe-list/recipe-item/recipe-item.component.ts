import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/shared/recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;


  onSelected() {
    this.recipeSelected.recipeSelected.emit(this.recipe);
  }

  constructor(private recipeSelected: RecipeService) { }
  ngOnInit() {

  }
}
