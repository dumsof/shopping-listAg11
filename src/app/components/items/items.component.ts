import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      { id: 0, title: 'manzana', price: 10.5, quantity: 4, completed: true },
      { id: 1, title: 'pan', price: 10.5, quantity: 4, completed: false },
      { id: 2, title: 'aguacate', price: 10.5, quantity: 4, completed: true },
      { id: 3, title: 'naranja', price: 10.5, quantity: 4, completed: false },
    ];
  }

  onDeleteItem(item: Item) {
    this.items = this.items.filter((x) => x.id != item.id);
  }
}
