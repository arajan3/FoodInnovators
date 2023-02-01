import { Component } from '@angular/core';
const dataSource = require("../../../assets/json/recipeDetails.json");

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css'],
  
})
export class RecipesDetailsComponent {
  recipes:any;
  ngOnInit(): void {
  this.recipes=dataSource[0];
  console.log(this.recipes.Ingredients[0][0])
  }
}
