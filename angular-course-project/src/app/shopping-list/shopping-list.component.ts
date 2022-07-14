import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private serviceSubscriprtion: Subscription;
  ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();

    this.serviceSubscriprtion = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }); /* Toda vez que houver uma inclusão de um ingrediente, 
          o subscribe é notificado e atualiza o array usado para 
          mostrar os ingredientes, o que acaba refletido  na página html 
          (é feita uma nova cópai).*/
  }

  ngOnDestroy(): void {
    this.serviceSubscriprtion.unsubscribe();
  }
}
