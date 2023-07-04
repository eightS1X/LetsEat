import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from '../../services/cookie-service/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class TempDataLoaderService {
//  This class is meant to be a temporary data loader while there is no functionality
//  for uploading / providing an input file to the application
  csvData: string[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  async loadFileContentsIntoCookie(inputAssetFilePath: string) {
    this.http.get(inputAssetFilePath, { responseType: 'text' })
      .subscribe(
        (data: string) => {
          this.csvData = data.split('\n');
          const delimitedString = this.csvData.join(', ').replace('\r','');
          this.cookieService.saveDataToCookie("restaurants", delimitedString);
        },
        (error) => {
          console.error('Error reading CSV file:', error);
        }
      );
  }

}
