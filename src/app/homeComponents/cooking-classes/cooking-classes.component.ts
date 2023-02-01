import { Component, ViewEncapsulation } from "@angular/core";
const licenseDocs = require("../../../assets/json/cookingClassDetails.json");

    // Import Swiper Svelte components    
    import { SwiperComponent } from "swiper/angular";
    
    // import Swiper core and required modules
    import SwiperCore, { Pagination, Navigation } from "swiper";
    
    // install Swiper modules
    SwiperCore.use([Pagination, Navigation]);
   

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
