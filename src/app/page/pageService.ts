

import {Injectable} from "@angular/core";
import {Http,Response,Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Page} from "./page";

@Injectable()
export class PageService {

  private pageUrl = 'http://localhost:8080/bookstore';  // URL to web api

  constructor(private http: Http) { }

  getTopTitles() :Promise<Array<Page>> {
    return this.http
      .get(this.pageUrl+"/admin/topFiveTitles")
      .toPromise()
      .then((response) => {
        return response.json() as Page[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
