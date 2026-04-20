import { Component, inject } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-basket',
  imports: [],
  templateUrl: './item-basket.html',
  styleUrl: './item-basket.css',
})
export class ItemBasket {
  itemsService = inject(ItemsService);

  itemBasket = {
    lines: [
      {
        itemId: 1,
        quantity: 2,
      },
      {
        itemId: 2,
        quantity: 1,
      },
    ],
  };    

  get totalItems() {
    return this.itemBasket.lines.reduce((total, line) => total + line.quantity, 0);
  }

  get totalPrice() {
    return this.itemBasket.lines.reduce(
      (total, line) => total + line.quantity * (this.itemsService.getItemById(line.itemId)?.price || 0), 
      0);
  }
}
