import { Component } from '@angular/core';
import { ItemDisplay } from './item-display/item-display';
import { ItemBasket } from './item-basket/item-basket';
import { ItemCreation } from './item-creation/item-creation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items',
  imports: [ItemDisplay, ItemBasket, ItemCreation, FormsModule],
  templateUrl: './items.html',
  styleUrl: './items.css',
})
export class Items {
  addNewItemSelected = false;
  searchTerm = '';

  onAddingNewItem() {
    this.addNewItemSelected = true;
  }

  onCancel() {
    this.addNewItemSelected = false;
  }
}
