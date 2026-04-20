import { Inject, Injectable } from "@angular/core";
import { ItemType } from "./item.models";

@Injectable({
    providedIn: 'root',
})
export class ItemsService {
  private items: ItemType[] = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', price: 10 },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', price: 20 },
    { id: 3, name: 'Item 3', description: 'Description of Item 3', price: 30 },
  ];

  getItems(): ItemType[] {
    return this.items;
  }

    getItemById(id: number): ItemType | undefined {
      return this.items.find(item => item.id === id);
    }

}