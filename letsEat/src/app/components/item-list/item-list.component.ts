import { Component } from '@angular/core';
import { CookieService } from '../../services/cookie-service/cookie.service';
import { TempDataLoaderService } from 'src/app/services/temp-data-loader/temp-data-loader.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  items: string[] = [];
  inputData: string = "";
  
  constructor(private cookieService: CookieService, private dataLoader: TempDataLoaderService) { }

  ngOnInit() {
    this.dataLoader.loadFileContentsIntoCookie('assets/data/lunchlist.csv', 'restaurants');
    if (this.cookieService.checkCookieExists("restaurants")) {
      this.items = this.cookieService.getCookie("restaurants").split(",");
    }
    if (this.items.length === 0) {
      location.reload();
    }
  }

  onClick() {
    if (this.inputData) {
      this.items.push(this.inputData);
      const delimitedString = this.items.join(', ');
      this.cookieService.saveDataToCookie("restaurants", delimitedString);
      this.inputData = "";
    } else {
      alert("Please enter a restaurant name before clicking 'Add'");
    }
  }

}
