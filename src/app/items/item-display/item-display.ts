import { Component, inject, Input } from '@angular/core';
import { Item } from '../item/item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item-display',
  imports: [Item],
  templateUrl: './item-display.html',
  styleUrl: './item-display.css',
})
export class ItemDisplay {
  @Input({required: true}) keyText!: string;
  itemsService = inject(ItemsService);

  get getItems() {
    console.log('Getting items for search term:', this.keyText);
    return this.itemsService.getItems(this.keyText);
  }
}
