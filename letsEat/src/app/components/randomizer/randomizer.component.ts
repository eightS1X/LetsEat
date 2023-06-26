import { Component } from '@angular/core';
import { CookieService } from '../../services/cookie-service/cookie.service';

@Component({
  selector: 'randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.scss']
})
export class RandomizerComponent {

  items: string[] = [];
  chosenRestaurant: string = "";

  constructor(private cookieService: CookieService) { }

  tellMeWhereToEat() {
    if (this.cookieService.checkCookieExists("restaurants")) {
      this.items = this.cookieService.getCookie("restaurants").split(",");
      const randomIndex = Math.floor(Math.random() * this.items.length);
      this.chosenRestaurant = this.items[randomIndex];
    } else {
      alert("There's nothing to choose from. Add something to the list first.");
    }
  }

}
