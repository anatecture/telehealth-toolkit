import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolkit-experience',
  templateUrl: './toolkit-experience.component.html',
  styleUrls: ['./toolkit-experience.component.css']
})
export class ToolkitExperienceComponent implements OnInit {

  links: any;
  constructor() { }

  ngOnInit() {
    this.links = [
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"},
      {"url": "#", "text": "One Link with a very,very long title"},
      {"url": "#", "text": "One Link Regular Length"}
    ]
  }

}
