import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  inputData: string = "";

  onClick() {
    this.items.push(this.inputData);
    this.inputData = "";
  }

}
