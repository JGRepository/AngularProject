import { Component } from '@angular/core';
import { Ingridient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tomatoes', 10),
  ];

}
