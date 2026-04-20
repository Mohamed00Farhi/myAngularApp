import { Inject, Injectable } from "@angular/core";
import { ItemType } from "./item.models";
import { Item } from "./item/item";

@Injectable({
    providedIn: 'root',
})
export class ItemsService {
  private items: ItemType[] = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', price: 10 },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', price: 20 },
    { id: 3, name: 'Item 3', description: 'Description of Item 3', price: 30 },
  ];

  private itemBasket = {
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

  private readonly ITEMS_STORAGE_KEY = 'items';
  private readonly ITEM_BASKET_STORAGE_KEY = 'item-basket';
  
  constructor() {
    this.loadDataFromLocalStorage();
  }

  getItems(): ItemType[] {
    return this.items;
  }

    getItemById(id: number): ItemType | undefined {
      return this.items.find(item => item.id === id);
    }

    getTotalItems() {
      return this.itemBasket.lines.reduce((total, line) => total + line.quantity, 0);
    }

    getTotalPrice() {
      return this.itemBasket.lines.reduce(
        (total, line) => total + line.quantity * (this.getItemById(line.itemId)?.price || 0), 
        0);
    }

    addItemToBasket(item: ItemType) {
      const existingLine = this.itemBasket.lines.find(line => line.itemId === item.id);
      if (existingLine) {
        existingLine.quantity += 1;
      } else {
        this.itemBasket.lines.push({ itemId: item.id, quantity: 1 });
      }
      this.saveDataToLocalStorage();
    }

    getTotalForItem(itemId: number) {
      const line = this.itemBasket.lines.find(line => line.itemId === itemId);
      return line ? line.quantity : 0;
    }

    addNewItem(newItem: ItemType) {
      this.items.push(newItem);
      this.saveDataToLocalStorage();
    }

    loadDataFromLocalStorage(): void {
      try {
        const storedItems = localStorage.getItem(this.ITEMS_STORAGE_KEY);
        if (storedItems) {
          this.items = JSON.parse(storedItems);
        }
        const storedItemBasket = localStorage.getItem(this.ITEM_BASKET_STORAGE_KEY);
        if (storedItemBasket) {
          this.itemBasket = JSON.parse(storedItemBasket);
        }
      } catch (error) {
        console.error('Error loading items from localStorage:', error);
      }
    }

    saveDataToLocalStorage(): void {
      try {
        localStorage.setItem(this.ITEMS_STORAGE_KEY, JSON.stringify(this.items));
        localStorage.setItem(this.ITEM_BASKET_STORAGE_KEY, JSON.stringify(this.itemBasket));
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    }
}