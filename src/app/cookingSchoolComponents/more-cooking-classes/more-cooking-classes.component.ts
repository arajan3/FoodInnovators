import { Component } from '@angular/core';
const licenseDocs = require("../../../assets/json/cookingClassDetails.json");

@Component({
  selector: 'app-more-cooking-classes',
  templateUrl: './more-cooking-classes.component.html',
  styleUrls: ['./more-cooking-classes.component.css']
})
export class MoreCookingClassesComponent {
  VideoDetails:any;
  ngOnInit(): void {
    console.log(licenseDocs)
this.VideoDetails=licenseDocs;
  }
}
