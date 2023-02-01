import { Component } from '@angular/core';
const licenseDocs = require("../../../assets/json/videoDetails.json");

@Component({
  selector: 'app-cooking-session-video',
  templateUrl: './cooking-session-video.component.html',
  styleUrls: ['./cooking-session-video.component.css']
})

export class CookingSessionVideoComponent {
  VideoDetails:any;

  ngOnInit(): void {
    console.log(licenseDocs[0])
this.VideoDetails=licenseDocs[0];
  }
}
