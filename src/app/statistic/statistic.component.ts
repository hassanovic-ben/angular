import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../admin/admin.service";
import {Client} from "../client/client";
import {Book} from "../book/book";
import {Page} from "../page/page";
import {PageService} from "../page/pageService";

@Component({
  selector: 'my-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  best:Client
  bestBook: Book
  topTitle:Array<Page>
  totalBookSold:number
  error: any

  constructor(private router: Router,
              private userService: UserService,
              private pageService : PageService) { }


  getBestClient(): void {

    this.userService
      .getBestClient().then(best =>this.best = best).catch(error => this.error = error)
  }

  getBestBook(): void {
    this.userService
      .getBestBook().then(bestBook=>this.bestBook = bestBook).catch(error=>this.error = error)
  }

  getTotalBookSold():void {
    this.userService.getTotalBook().then(totalBook=>this.totalBookSold = totalBook).catch(error=>this.error = error)
  }

  getTopFiveTitles():void {
    this.pageService.getTopTitles().then(bestTitle=>this.topTitle = bestTitle).catch(error=>this.error = error)
    console.log(this.topTitle)
  }

  ngOnInit() {
    this.getBestBook()
    this.getBestClient()
    this.getTotalBookSold()
    this.getTopFiveTitles()

  }

}
