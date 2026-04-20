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
 

  get totalItems() {
    return this.itemsService.getTotalItems();
  }

  get totalPrice() {
    return this.itemsService.getTotalPrice();
  }
}
