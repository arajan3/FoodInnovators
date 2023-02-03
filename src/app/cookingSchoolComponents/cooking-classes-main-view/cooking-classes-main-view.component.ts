import { Component } from '@angular/core';
const daatSource = require("../../../assets/json/cookingClassDetails.json");

@Component({
  selector: 'app-cooking-classes-main-view',
  templateUrl: './cooking-classes-main-view.component.html',
  styleUrls: ['./cooking-classes-main-view.component.css']
})
export class CookingClassesMainViewComponent {
  Cardetails: any;

  ngOnInit(): void {
    this.Cardetails = daatSource;
  }
}
