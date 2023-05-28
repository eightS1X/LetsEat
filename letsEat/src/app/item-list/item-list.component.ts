import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: string[] = [];
  inputData: string = "";

  onClick() {
    this.items.push(this.inputData);
    this.inputData = "";
  }

}
