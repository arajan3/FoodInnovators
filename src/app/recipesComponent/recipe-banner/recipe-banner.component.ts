import { Component } from '@angular/core';
const dataSource = require("../../../assets/json/recipeBanner.json");

@Component({
  selector: 'app-recipe-banner',
  templateUrl: './recipe-banner.component.html',
  styleUrls: ['./recipe-banner.component.css']
})
export class RecipeBannerComponent {
  recipeOfTheDay:any;

  ngOnInit(): void {
this.recipeOfTheDay=dataSource[0];
  }
}
