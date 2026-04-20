import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBasket } from './item-basket';

describe('ItemBasket', () => {
  let component: ItemBasket;
  let fixture: ComponentFixture<ItemBasket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBasket],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemBasket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
