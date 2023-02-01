import { Component } from '@angular/core';
const licenseDocs = require("../../../assets/json/meetTheTeam.json");

@Component({
  selector: 'app-meet-the-team-cards',
  templateUrl: './meet-the-team-cards.component.html',
  styleUrls: ['./meet-the-team-cards.component.css']
})
export class MeetTheTeamCardsComponent {
  VideoDetails:any;

  ngOnInit(): void {
    console.log(licenseDocs)
this.VideoDetails=licenseDocs;
  }
}
