import { Component, Input } from '@angular/core';
import { ItemType } from '../item.models';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input({required: true}) item!: ItemType;

  onAddToCart() {
    console.log(`Adding item ${this.item.name} to basket`);
  }
}
