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
  selectedFile: File | null = null;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.checkCookieExists("restaurants")) {
      this.items = this.cookieService.getCookie("restaurants").split(",");
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

  onFileSelected(event: Event) {
    const element = event.target as HTMLInputElement;
    if (element.files) {
      this.selectedFile = element.files[0];
    }
  }

  onSubmit() {
    if (this.selectedFile) {
      alert("You selected: " + this.selectedFile.name);
    } else {
      alert("No file selected");
    }
    
  }

}
