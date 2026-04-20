import { Component, inject, Input } from '@angular/core';
import { ItemType } from '../item.models';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input({required: true}) item!: ItemType;
  itemsService = inject(ItemsService);

  onAddToCart() {
    this.itemsService.addItemToBasket(this.item);
  }
}
