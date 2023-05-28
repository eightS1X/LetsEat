import { Component } from '@angular/core';
import { CookieService } from '../../services/cookie-service/cookie.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: string[] = [];
  inputData: string = "";

  constructor(private cookieService: CookieService) {}

  ngOnInit() {
    if (this.cookieService.checkCookieExists("restaurants")){
      this.items = this.cookieService.getCookie("restaurants").split(",");
    } 
  }

  onClick() {
    this.items.push(this.inputData);
    const delimitedString = this.items.join(', ');
    this.cookieService.saveDataToCookie("restaurants", delimitedString);
    this.inputData = "";
  }

}
