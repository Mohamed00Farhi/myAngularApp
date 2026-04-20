import { Component, inject } from '@angular/core';
import { Item } from '../item/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-display',
  imports: [Item],
  templateUrl: './item-display.html',
  styleUrl: './item-display.css',
})
export class ItemDisplay {
  itemsService = inject(ItemsService);

  get getItems() {
    return this.itemsService.getItems();
  }
}
