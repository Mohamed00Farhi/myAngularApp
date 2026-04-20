import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ItemsService } from '../items.service';
import { FormsModule } from '@angular/forms';
import { ItemType } from '../item.models';

@Component({
  selector: 'app-item-creation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-creation.html',
  styleUrl: './item-creation.css',
})
export class ItemCreation {
  @Output() cancel = new EventEmitter<void>();
  itemsService = inject(ItemsService);
  name: string = '';
  price: number = 0;
  description: string = '';

  onCancelCreation() {
    this.cancel.emit();
  }

  onSubmit() {
    const newItem: ItemType = {
      id: new Date().getTime(), // This will be set by the service
      name: this.name,
      price: this.price,
      description: this.description
    };
    console.log('Submitting new item:', newItem);
    this.itemsService.addNewItem(newItem);
    this.cancel.emit();
  }
}
