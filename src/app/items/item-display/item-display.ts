import { Component } from '@angular/core';
import { Item } from '../item/item';

@Component({
  selector: 'app-item-display',
  imports: [Item],
  templateUrl: './item-display.html',
  styleUrl: './item-display.css',
})
export class ItemDisplay {
  items = [
    {
      id: 1,
      name: 'Item 1',
      description: 'Description of item 1',
      price: 10.99,
    },
    {
      id: 2,
      name: 'Item 2',
      description: 'Description of item 2',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Item 3',
      description: 'Description of item 3',
      price: 5.99,
    },       
  ]
}
