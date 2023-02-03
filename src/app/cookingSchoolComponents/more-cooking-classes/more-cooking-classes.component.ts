import { Component } from '@angular/core';
const daatSource = require("../../../assets/json/cookingClassDetails.json");

@Component({
  selector: 'app-more-cooking-classes',
  templateUrl: './more-cooking-classes.component.html',
  styleUrls: ['./more-cooking-classes.component.css']
})
export class MoreCookingClassesComponent {
  Cardetails: any;

  ngOnInit(): void {
    this.Cardetails = daatSource;
  }
}
