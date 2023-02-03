import { Component } from '@angular/core';
const daatSource = require("../../../assets/json/cookingClassDetails.json");

@Component({
  selector: 'app-test-slider',
  templateUrl: './test-slider.component.html',
  styleUrls: ['./test-slider.component.css'],
})


export class TestSliderComponent {

  public cards = [{
    title: "Here is a title",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  },
  {
    title: "Here is a title2",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  },
  {
    title: "Here is a title3",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  },
  {
    title: "Here is a title4",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  },
  {
    title: "Here is a title5",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  },
  {
    title: "Here is a title6",
    description: "Here is a description of the card, it is just some more information about the card.",
    image: "someURlhere"
  }
  ]
  Cardetails: any;

  ngOnInit(): void {
    this.Cardetails = daatSource;
  }
  prev(){
    console.log("prev clicked")
  }


}
