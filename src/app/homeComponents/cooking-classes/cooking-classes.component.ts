import { Component, ViewEncapsulation } from "@angular/core";
const licenseDocs = require("../../../assets/json/cookingClassDetails.json");

 
@Component({
  selector: "app-cooking-classes",
  templateUrl: "./cooking-classes.component.html",
  styleUrls: ["./cooking-classes.component.css"],
  encapsulation:ViewEncapsulation.None
})
export class CookingClassesComponent {
  VideoDetails: any;


  ngOnInit(): void {
    console.log(licenseDocs);
    this.VideoDetails = licenseDocs;
  }

  next(){
console.log("hitting")
  }
  prev(){
    console.log(" prev hitting")

  }
 
}
