import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();

  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(item: Item){
    this.deleteItem.emit(item)
  }
}
