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

  ngOnInit() {
    if (this.cookieService.checkCookieExists("restaurants")) {
      this.items = this.cookieService.getCookie("restaurants").split(",");
    }
  }

  tellMeWhereToEat() {
    const randomIndex = Math.floor(Math.random() * this.items.length);
    this.chosenRestaurant = this.items[randomIndex];
  }

}
