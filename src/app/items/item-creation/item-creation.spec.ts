import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreation } from './item-creation';

describe('ItemCreation', () => {
  let component: ItemCreation;
  let fixture: ComponentFixture<ItemCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCreation],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemCreation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
