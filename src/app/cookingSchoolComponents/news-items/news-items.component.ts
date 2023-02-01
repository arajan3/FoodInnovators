import { Component } from '@angular/core';
const licenseDocs = require("../../../assets/json/news.json");

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.css']
})
export class NewsItemsComponent {
  news:any;

  ngOnInit(): void {
    console.log(licenseDocs)
this.news=licenseDocs[0];
  }
}
