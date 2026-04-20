export interface ItemBasketLine {
  itemId: number;
  quantity: number;
}

export interface ItemBasket {
  lines: ItemBasketLine[];
}