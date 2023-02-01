import { Component } from '@angular/core';
const dataSource = require("../../../assets/json/termsAndConditions.json");

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent {
  terms:any;

  ngOnInit(): void {
this.terms=dataSource[0];
  }
}
